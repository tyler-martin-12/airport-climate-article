// Reusable iframe auto-height pattern adapted from vegan-effort-dashboard.html.
// Observe content, not the iframe viewport height, to avoid resize feedback loops.
const content = document.querySelector('main');
let scheduled = false;
function reportHeight() {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    scheduled = false;
    const style = getComputedStyle(document.body);
    const height = Math.ceil(content.getBoundingClientRect().height + parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
    if (window.parent !== window) window.parent.postMessage({type:'airport-climate-height',height}, window.location.origin);
  });
}
new ResizeObserver(reportHeight).observe(content);
window.addEventListener('load', reportHeight);
window.addEventListener('resize', reportHeight);
reportHeight();
