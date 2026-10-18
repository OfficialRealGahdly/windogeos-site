// scripts/verify.js - optional simple fetch for checksums JSON
// If you host /downloads/latest-checksums.json, this will populate the SHA256 on the downloads page.

(function(){
  const shaEl = document.getElementById('sha256');
  if(!shaEl) return;
  fetch('/downloads/latest-checksums.json')
    .then(r=>{ if(!r.ok) throw new Error('no checksums'); return r.json() })
    .then(js=>{ if(js && js.sha256) shaEl.textContent = js.sha256 })
    .catch(()=>{})
})();
