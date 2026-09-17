const $=(s)=>document.querySelector(s);
const esc=(s)=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const scoreShape={3:'circle',2:'square',1:'diamond',0:'hollow'};
let records=[],filtered=[],sortKey='prominence_score',sortAsc=false,activeId=null,view='world';
const map=$('#map'),markers=$('#markers'),detail=$('#detail'),tbody=$('#tbody'),cards=$('#cards');
function xy(lon,lat){return [lon+180,85-lat]}
function shape(r){
 const [x,y]=xy(r.longitude,r.latitude),s=r.prominence_score,k=view==='europe'?0.34:1;
 if(s===3)return `<circle class="marker" data-id="${r.id}" data-score="${s}" tabindex="0" role="button" aria-label="${esc(r.project)}, ${esc(r.city)}, ${esc(r.prominence)}" cx="${x}" cy="${y}" r="${(2.7*k).toFixed(2)}"/>`;
 if(s===2)return `<rect class="marker" data-id="${r.id}" data-score="${s}" tabindex="0" role="button" aria-label="${esc(r.project)}, ${esc(r.city)}, ${esc(r.prominence)}" x="${x-2.5*k}" y="${y-2.5*k}" width="${5*k}" height="${5*k}" rx=".7"/>`;
 if(s===1)return `<rect class="marker" data-id="${r.id}" data-score="${s}" tabindex="0" role="button" aria-label="${esc(r.project)}, ${esc(r.city)}, ${esc(r.prominence)}" x="${x-2.2*k}" y="${y-2.2*k}" width="${4.4*k}" height="${4.4*k}" rx=".5" transform="rotate(45 ${x} ${y})"/>`;
 return `<rect class="marker" data-id="${r.id}" data-score="${s}" tabindex="0" role="button" aria-label="${esc(r.project)}, ${esc(r.city)}, ${esc(r.prominence)}" x="${x-2.3*k}" y="${y-2.3*k}" width="${4.6*k}" height="${4.6*k}" fill="none"/>`;
}
function renderGrid(){
 let out='';
 for(let lon=-150;lon<=150;lon+=30){const x=lon+180;out+=`<line class="graticule" x1="${x}" y1="0" x2="${x}" y2="145"/>`}
 for(let lat=-30;lat<=60;lat+=30){const y=85-lat;out+=`<line class="graticule" x1="0" y1="${y}" x2="360" y2="${y}"/>`}
 $('#grid').innerHTML=out;
}
function renderMarkers(){
 markers.innerHTML=filtered.filter(r=>view!=='europe'||(r.longitude>=-18&&r.longitude<=40&&r.latitude>=31&&r.latitude<=65)).map(shape).join('');
 const ids=new Set(filtered.map(r=>r.id));
 markers.querySelectorAll('.marker').forEach(el=>{
   el.classList.toggle('is-dim',!ids.has(el.dataset.id));
   el.classList.toggle('is-active',el.dataset.id===activeId);
   el.addEventListener('click',()=>select(el.dataset.id));
   el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();select(el.dataset.id)}});
   el.addEventListener('mouseenter',()=>{if(ids.has(el.dataset.id))select(el.dataset.id,false)});
 });
}
function sourceLink(url,label){return /^https?:\/\//i.test(url||'')?`<a href="${esc(url)}" target="_blank" rel="noreferrer">${label}</a>`:''}
function select(id,scroll=false){
 const r=filtered.find(x=>x.id===id); if(!r)return; activeId=id;
 detail.innerHTML=`<h3>${esc(r.project)}</h3><div class="place">${esc(r.city)} · ${esc(r.country)} · ${esc(r.region)}</div>
 <div class="detail-grid">
 <div><b>Expansion</b>${esc(r.expansion_type)}</div><div><b>Status</b>${esc(r.status)}</div><div><b>Capacity / scale</b>${esc(r.capacity)}</div>
 <div><b>Decision constraint · interpretation</b>${esc(r.prominence)}</div><div><b>National goal</b>${esc(r.national_climate_goal)}</div><div><b>Emissions coverage · aviation goal</b>${esc(r.aviation_climate_goal)}</div><div><b>International aviation</b>${esc(r.international_aviation_included === 'Not explicit in reviewed handoff' ? 'Not established in this review' : r.international_aviation_included)}</div>
 </div><p class="detail-note"><strong>Decision evidence and interpretation:</strong> ${esc(r.evidence_note)}</p>
 <p class="sources">${sourceLink(r.project_source,'Project source')}${r.project_source&&r.climate_source?' · ':''}${sourceLink(r.climate_source,'Climate / policy source')} · Interpretation confidence: ${esc(r.confidence)}</p>${r.verification_note?`<p class="sources">Checked 16 September 2026: ${esc(r.verification_note)} ${sourceLink(r.verification_source,'Verification source')}</p>`:''}`;
 markers.querySelectorAll('.marker').forEach(el=>{el.classList.toggle('is-active',el.dataset.id===id);el.setAttribute('aria-pressed',String(el.dataset.id===id))});
 document.querySelectorAll('[data-row-id]').forEach(el=>el.classList.toggle('is-active',el.dataset.rowId===id));
 if(scroll)detail.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'nearest'});
 reportHeight();
}
function unique(key){return [...new Set(records.map(r=>r[key]))].sort((a,b)=>String(a).localeCompare(String(b)))}
function fillSelect(id,key){const s=$(id);unique(key).forEach(v=>{const o=document.createElement('option');o.value=v;o.textContent=v;s.appendChild(o)})}
function apply(){
 const vals={region:$('#regionFilter').value,project_type:$('#typeFilter').value,status_group:$('#statusFilter').value,prominence:$('#promFilter').value,commitment_type:$('#commitFilter').value};
 filtered=records.filter(r=>Object.entries(vals).every(([k,v])=>!v||String(r[k])===v));
 filtered.sort((a,b)=>{let x=a[sortKey],y=b[sortKey];if(typeof x==='number')return sortAsc?x-y:y-x;return sortAsc?String(x).localeCompare(String(y)):String(y).localeCompare(String(x))});
 $('#count').textContent=`Showing ${filtered.length} of ${records.length} projects`;
 if(!filtered.some(r=>r.id===activeId)){activeId=null;detail.innerHTML='<p class="detail-empty">'+(filtered.length?'Select a matching project.':'No projects match these filters. Change a filter to continue.')+'</p>'}
 renderMarkers();renderTable();document.querySelectorAll('th[data-sort]').forEach(th=>th.setAttribute('aria-sort',th.dataset.sort===sortKey?(sortAsc?'ascending':'descending'):'none'));reportHeight();
}
function renderTable(){
 tbody.innerHTML=filtered.map(r=>`<tr tabindex="0" data-row-id="${r.id}"><td><strong>${esc(r.project)}</strong><br><span class="cat">${esc(r.city)}</span></td><td>${esc(r.country)}</td><td>${esc(r.project_type)}</td><td>${esc(r.status_group)}</td><td><span class="cat">${esc(r.prominence)}</span></td><td>${esc(r.capacity)}</td></tr>`).join('');
 cards.innerHTML=filtered.map(r=>`<article class="card" role="button" tabindex="0" data-row-id="${r.id}"><h3>${esc(r.project)}</h3><div class="meta">${esc(r.city)} · ${esc(r.country)} · ${esc(r.prominence)}</div><p>${esc(r.capacity)}</p></article>`).join('');
 document.querySelectorAll('[data-row-id]').forEach(el=>{
  el.addEventListener('click',()=>select(el.dataset.rowId,true));
  el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();select(el.dataset.rowId,true)}});
 });
}
function setView(next){
 view=next;
 $('#worldView').setAttribute('aria-pressed',String(view==='world'));$('#europeView').setAttribute('aria-pressed',String(view==='europe'));
 map.setAttribute('viewBox',view==='world'?'0 0 360 145':'162 20 58 34');
 map.style.minHeight=view==='world'?'300px':'360px';
 renderMarkers();reportHeight();
}
function reportHeight(){window.airportReportHeight?.()}
fetch('./data/airports.json').then(r=>{if(!r.ok)throw Error('Dataset HTTP '+r.status);return r.json()}).then(data=>{
 if(!Array.isArray(data)||!data.length||data.some(r=>!r.id||!r.project||!Number.isFinite(r.latitude)||!Number.isFinite(r.longitude)||![0,1,2,3].includes(r.prominence_score))||new Set(data.map(r=>r.id)).size!==data.length)throw Error('Invalid dataset');
 records=data;filtered=data.slice();renderGrid();
 fillSelect('#regionFilter','region');fillSelect('#typeFilter','project_type');fillSelect('#statusFilter','status_group');fillSelect('#promFilter','prominence');fillSelect('#commitFilter','commitment_type');
 document.querySelectorAll('select').forEach(s=>s.addEventListener('change',apply));
 document.querySelectorAll('th[data-sort]').forEach(th=>{const button=document.createElement('button');button.textContent=th.textContent;button.setAttribute('aria-label','Sort by '+th.textContent);th.replaceChildren(button);button.addEventListener('click',()=>{const k=th.dataset.sort;sortAsc=sortKey===k?!sortAsc:true;sortKey=k;apply()})});
 $('#worldView').addEventListener('click',()=>setView('world'));$('#europeView').addEventListener('click',()=>setView('europe'));
 apply();select('heathrow-third-runway');new ResizeObserver(reportHeight).observe(document.querySelector('main'));
}).catch(err=>{detail.innerHTML='<p class="detail-empty">The airport dataset could not be loaded. Check your connection and <button onclick="location.reload()">Retry</button>.</p>';console.error(err)});
window.addEventListener('load',reportHeight);window.addEventListener('resize',reportHeight,{passive:true});
