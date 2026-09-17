// Exercised from browser.cjs against the rendered article's actual iframe.
const assert=require('node:assert/strict');
module.exports=async(page,frame,width)=>{
 const data=await frame.locator('body').evaluate(()=>records);
 const controls={regionFilter:'region',typeFilter:'project_type',statusFilter:'status_group',promFilter:'prominence',commitFilter:'commitment_type'};
 for(const [id,key] of Object.entries(controls)){
  for(const value of [...new Set(data.map(r=>r[key]))]){
   await frame.locator('#'+id).selectOption(value);
   assert.equal(await frame.locator('#tbody tr').count(),data.filter(r=>r[key]===value).length);
  }
  await frame.locator('#'+id).selectOption('');
 }
 for(const region of [...new Set(data.map(r=>r.region))]){
  await frame.locator('#regionFilter').selectOption(region);
  for(const type of [...new Set(data.map(r=>r.project_type))]){
   await frame.locator('#typeFilter').selectOption(type);
   const expected=data.filter(r=>r.region===region&&r.project_type===type).length;
   assert.equal(await frame.locator('#tbody tr').count(),expected);
   if(!expected)assert.match(await frame.locator('#detail').innerText(),/No projects match/);
  }
 }
 for(const id of Object.keys(controls))await frame.locator('#'+id).selectOption('');
 assert.equal(await frame.locator('#tbody tr').count(),30);
 await frame.locator('#europeView').click();await frame.locator('#worldView').click();
 assert.equal(await frame.locator('.marker').count(),30);
 const isolated=frame.locator('.marker[data-id="changi-terminal-5"]');
 if(width>500)await isolated.hover();else await isolated.tap();
 assert.equal(await frame.locator('#detail h3').innerText(),'Changi Terminal 5');
 await isolated.focus();await page.keyboard.press('Space');
 assert.equal(await isolated.evaluate(e=>e===document.activeElement),true);
 await frame.locator('#worldView').focus();await page.keyboard.press('Tab');
 assert.equal(await frame.locator('#europeView').evaluate(e=>e===document.activeElement),true);
 for(const r of data){
  // Exercise all rendered rows/cards, including longest notes and current-source amendments.
  const item=frame.locator((width>500?'#tbody tr':'#cards .card')+`[data-row-id="${r.id}"]`);
  await item.focus();await page.keyboard.press('Enter');
  assert.equal(await frame.locator('#detail h3').innerText(),r.project);
  const links=await frame.locator('#detail a').evaluateAll(es=>es.map(e=>e.href));
  assert(links.includes(r.project_source)&&links.includes(r.climate_source));
  assert(await frame.locator('html').evaluate(e=>e.scrollWidth<=innerWidth));
 }
 for(const score of [0,1,2,3]){
  const marker=frame.locator(`.marker[data-score="${score}"]`).first();
  assert.match(await marker.getAttribute('aria-label'),new RegExp(data.find(r=>r.prominence_score===score).prominence));
 }
 assert.equal(await frame.locator('.marker[data-score="3"]').first().evaluate(e=>e.tagName),'circle');
 assert.match(await frame.locator('.marker[data-score="1"]').first().getAttribute('transform'),/rotate\(45/);
 const before=await page.locator('iframe').evaluate(e=>e.clientHeight);
 await page.setViewportSize({width:width===1280?900:width+30,height:850});await page.waitForTimeout(500);
 assert(await frame.locator('main').evaluate(e=>e.getBoundingClientRect().bottom<=innerHeight+2));
 await page.setViewportSize({width,height:850});await page.waitForTimeout(500);
 assert(Math.abs(await page.locator('iframe').evaluate(e=>e.clientHeight)-before)<5);
 await page.emulateMedia({reducedMotion:'reduce'});
 await frame.locator('body').evaluate(()=>{window.lastScroll=null;const orig=Element.prototype.scrollIntoView;Element.prototype.scrollIntoView=function(opts){window.lastScroll=opts;return orig.call(this,opts)}});
 await frame.locator(width>500?'#tbody tr':'#cards .card').first().focus();await page.keyboard.press('Enter');
 assert.equal(await frame.locator('body').evaluate(()=>window.lastScroll.behavior),'auto');
 await page.emulateMedia({reducedMotion:'no-preference'});
 await page.locator('iframe').scrollIntoViewIfNeeded();const y=await page.evaluate(()=>scrollY);await page.mouse.wheel(0,600);await page.waitForTimeout(250);assert(await page.evaluate(()=>scrollY)>y,'page scrolls across iframe');
 console.log(`PASS extended embedded ${width}: all filters/options, region/type combinations, reset, all 30 details/source links, hover/tap, focus, resize, reduced motion, page scrolling`);
};
