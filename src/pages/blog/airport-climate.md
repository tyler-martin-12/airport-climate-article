---
layout: "../../layouts/BlogPost.astro"
title: "Airport expansion and climate policy"
date: "2026-09-16"
description: "Development placeholder: the article, evidence and airport dataset have not yet been supplied here."
slug: "airport-climate"
tags: ["aviation", "climate", "policy"]
---

This is a development placeholder, not a completed or published analysis. Insert the reviewed article here.

<div class="airport-embed">
<iframe id="airport-climate" src="/airport-climate/" title="Airport expansion and climate policy interactive" loading="lazy" style="width:100%;height:420px;border:1px solid var(--mist);border-radius:14px;display:block"></iframe>
<p><a href="/airport-climate/">Open the interactive in its own tab</a></p>
</div>
<script>
window.addEventListener('message', function(event) {
  const frame = document.getElementById('airport-climate');
  if (!frame || event.origin !== window.location.origin || event.source !== frame.contentWindow) return;
  const data = event.data;
  if (!data || data.type !== 'airport-climate-height' || !Number.isFinite(data.height)) return;
  if (data.height >= 120 && data.height <= 20000) frame.style.height = Math.ceil(data.height + 16) + 'px';
});
</script>
