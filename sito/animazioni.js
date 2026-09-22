/* Fa comparire le sezioni mentre si scorre la pagina, anima i numeri,
   fa scorrere il pannello "audit in corso" e la barra di lettura in testata.
   Se lo script non parte, o se sul telefono è attiva l'opzione
   "riduci animazioni", la pagina resta visibile e ferma: nessuna di queste
   funzioni è necessaria per leggere o usare il sito. */
(function () {
  var ridotte = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  function contaSu(el) {
    if (el._fatto) return;
    el._fatto = true;
    var fine = parseInt(el.getAttribute('data-conta'), 10);
    var suff = el.getAttribute('data-suffisso') || '';
    if (!fine || ridotte) { el.textContent = fine + suff; return; }
    var t0 = performance.now(), durata = 1000;
    function passo(t) {
      var p = Math.min(1, (t - t0) / durata);
      el.textContent = Math.round(fine * (1 - Math.pow(1 - p, 3))) + suff;
      if (p < 1) requestAnimationFrame(passo);
    }
    requestAnimationFrame(passo);
  }

  function contaDentro(nodo) {
    var interni = nodo.querySelectorAll('[data-conta]');
    for (var i = 0; i < interni.length; i++) contaSu(interni[i]);
    if (nodo.hasAttribute && nodo.hasAttribute('data-conta')) contaSu(nodo);
  }

  // ---------- comparsa allo scorrimento ----------
  function avviaComparsa() {
    var nodi = document.querySelectorAll('[data-anima]');
    if (!nodi.length) return;

    if (ridotte || !('IntersectionObserver' in window)) {
      for (var i = 0; i < nodi.length; i++) { nodi[i].classList.add('visibile'); contaDentro(nodi[i]); }
      document.documentElement.classList.add('anima');
      return;
    }

    document.documentElement.classList.add('anima');

    // rete di sicurezza: se qualcosa va storto, dopo 3 secondi mostra tutto
    var sicurezza = setTimeout(function () {
      for (var j = 0; j < nodi.length; j++) { nodi[j].classList.add('visibile'); contaDentro(nodi[j]); }
    }, 3000);

    var osservatore = new IntersectionObserver(function (voci) {
      voci.forEach(function (v) {
        if (v.isIntersecting) {
          v.target.classList.add('visibile');
          contaDentro(v.target);
          osservatore.unobserve(v.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    for (var k = 0; k < nodi.length; k++) osservatore.observe(nodi[k]);
    clearTimeout(sicurezza);
  }

  // ---------- barra di lettura in testata ----------
  function avviaBarraLettura() {
    var barra = document.querySelector('[data-progresso]');
    if (!barra) return;
    var coda = false;
    function aggiorna() {
      coda = false;
      var doc = document.documentElement;
      var max = (doc.scrollHeight - doc.clientHeight) || 1;
      var y = window.scrollY || doc.scrollTop || 0;
      barra.style.width = Math.min(100, Math.max(0, (y / max) * 100)) + '%';
    }
    aggiorna();
    window.addEventListener('scroll', function () {
      if (!coda) { coda = true; requestAnimationFrame(aggiorna); }
    }, { passive: true });
    window.addEventListener('resize', aggiorna, { passive: true });
  }

  // ---------- pannello "audit in corso" ----------
  function avviaScansioneAudit() {
    var righe = Array.prototype.slice.call(document.querySelectorAll('[data-riga]'));
    var stato = document.querySelector('[data-stato]');
    var barra = document.querySelector('[data-avanzamento]');
    if (!righe.length) return;

    function accendi(r) { r.classList.remove('spenta'); }
    function spegni(r) { r.classList.add('spenta'); }

    if (ridotte) {
      righe.forEach(accendi);
      if (stato) stato.textContent = righe.length + '/' + righe.length;
      if (barra) barra.style.width = '100%';
      return;
    }

    var i = 0, timer = null;
    function giro() {
      if (i >= righe.length) {
        timer = setTimeout(function () {
          righe.forEach(spegni);
          if (barra) { barra.style.transition = 'none'; barra.style.width = '0%'; void barra.offsetWidth; barra.style.transition = 'width .5s ease'; }
          if (stato) stato.textContent = '0/' + righe.length;
          i = 0;
          timer = setTimeout(giro, 700);
        }, 2600);
        return;
      }
      accendi(righe[i]);
      i++;
      if (stato) stato.textContent = i + '/' + righe.length;
      if (barra) barra.style.width = (i / righe.length * 100) + '%';
      timer = setTimeout(giro, 620);
    }
    righe.forEach(spegni);
    if (stato) stato.textContent = '0/' + righe.length;
    timer = setTimeout(giro, 900);
  }

  // ---------- inclinazione al passaggio del mouse ----------
  function avviaInclinazione() {
    if (ridotte) return;
    var bersagli = Array.prototype.slice.call(document.querySelectorAll('[data-inclina]'));
    if (!bersagli.length) return;
    var coda = false, mx = 0, my = 0;
    function applica() {
      coda = false;
      bersagli.forEach(function (b) {
        b.style.transform = 'perspective(1200px) rotateY(' + (mx * 4).toFixed(2) + 'deg) rotateX(' + (-my * 3).toFixed(2) + 'deg)';
        b.style.transition = 'transform .25s ease-out';
      });
    }
    window.addEventListener('mousemove', function (ev) {
      if (window.innerWidth < 900) return;
      mx = (ev.clientX / window.innerWidth) * 2 - 1;
      my = (ev.clientY / window.innerHeight) * 2 - 1;
      if (!coda) { coda = true; requestAnimationFrame(applica); }
    }, { passive: true });
  }

  document.addEventListener('DOMContentLoaded', function () {
    avviaComparsa();
    avviaBarraLettura();
    avviaScansioneAudit();
    avviaInclinazione();
  });
})();
