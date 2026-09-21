/* Fa comparire le sezioni mentre si scorre la pagina.
   Se lo script non parte, o se sul telefono è attiva l'opzione
   "riduci animazioni", la pagina resta visibile e ferma. */
(function () {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var radice = document.documentElement;
  radice.classList.add('anima');

  // Rete di sicurezza: se qualcosa va storto, dopo 3 secondi mostra tutto.
  var sicurezza = setTimeout(mostraTutto, 3000);
  function mostraTutto() {
    var el = document.querySelectorAll('[data-anima]');
    for (var i = 0; i < el.length; i++) el[i].classList.add('visibile');
  }

  document.addEventListener('DOMContentLoaded', function () {
    clearTimeout(sicurezza);
    var osservatore = new IntersectionObserver(function (voci) {
      voci.forEach(function (v) {
        if (v.isIntersecting) {
          v.target.classList.add('visibile');
          osservatore.unobserve(v.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    var el = document.querySelectorAll('[data-anima]');
    for (var i = 0; i < el.length; i++) osservatore.observe(el[i]);
  });
})();
