# RDC Solutions — sito

Landing page di una sola pagina. Nessun framework, nessuna libreria, nessuna
richiesta a server esterni, nessun cookie, nessun modulo, nessuna statistica.
Un solo piccolo script locale per le animazioni: se lo cancelli, la pagina
funziona uguale, solo senza animazioni.

## Cosa c'è dentro

```
rdc-solutions/
├── README.md            questo file
├── DA-COMPLETARE.md     la lista delle cose che mancano, da spuntare
└── sito/                ← la cartella da trascinare su Netlify
    ├── index.html       la pagina (HTML + CSS in un unico file)
    ├── animazioni.js    animazioni della pagina (facoltativo)
    ├── fonts/           i tre caratteri della pagina, in locale
    ├── logo-rdc*.svg    il logo: -chiaro per fondi scuri, l'altro per fondi chiari
    ├── img/             screenshot del sito di Unicum Collection
    ├── 404.html         pagina mostrata su indirizzi sbagliati
    ├── favicon.svg      icona della scheda del browser
    ├── apple-touch-icon.png  icona se qualcuno salva il sito sulla schermata home
    ├── _headers         impostazioni di sicurezza lette da Netlify
    ├── robots.txt       istruzioni per Google
    └── sitemap.xml      elenco delle pagine per Google
```

## Come si pubblica

1. Vai su app.netlify.com e accedi.
2. Sezione **Sites**, riquadro **Deploy manually**.
3. Trascina dentro **la cartella `sito`** (la cartella, non i file singoli).
4. In pochi secondi Netlify ti dà un indirizzo tipo `nome-a-caso-123.netlify.app`.
5. Per cambiarlo: **Site configuration → Change site name**.
6. Per usare un dominio tuo: **Domain management → Add a domain**.

Per aggiornare il sito più avanti: modifichi `index.html`, e trascini di nuovo
la cartella `sito` nella stessa area. Netlify sostituisce la versione online e
tiene lo storico delle precedenti.

## Dove si modificano le cose

Apri `sito/index.html` con un editor di testo (non con Word) e cerca il testo
indicato. Il file è commentato nei punti da completare: cerca `DA COMPLETARE`.

| Cosa | Come trovarlo | Note |
|---|---|---|
| Numero di telefono | cerca `393522010159` | compare 14 volte in `index.html` e 2 in `404.html`: cambiale tutte |
| Numero mostrato a schermo | cerca `352 201 0159` | è la versione scritta con gli spazi, va cambiata insieme al link |
| Email | cerca `rdcsolutions.tech@gmail.com` | |
| Prezzi | cerca `riga-prezzo` | sono le cifre del listino; l'audit compare anche in testata (`fatti`) e nella sezione `audit` |
| Screenshot dei lavori | cartella `img/` | se un sito cambia aspetto, rifai la schermata e sostituisci i file con lo stesso nome |
| Prezzo dell'audit | cerca `250` | compare anche nei messaggi WhatsApp precompilati e nei due riquadri delle sezioni verticali |
| Partita IVA | cerca `prestazione occasionale` | compare nel footer e sotto il listino: quando apri la partita IVA vanno cambiati tutti e due |
| Certificazioni | cerca `id="certificazioni"` | una scheda per titolo: ente, nome, ore, link di verifica se c'è |
| Messaggi WhatsApp precompilati | cerca `wa.me/393522010159?text=` | il testo dopo `?text=` è scritto in codice URL: gli spazi sono `%20`, l'apostrofo `%27`, la virgola resta virgola |

### Attenzione ai messaggi WhatsApp

Ce ne sono tre versioni diverse, ed è voluto:

- generico, nelle azioni principali;
- "ho un'attività a Roma", solo nella sezione `#attivita`;
- "ho una struttura ricettiva a Roma", solo nella sezione `#strutture`.

Così, quando ti arriva un messaggio, sai già da quale sezione è entrato il
contatto. Se riscrivi quei testi, tienili diversi tra loro.

## I due link per i QR code

- Attività: `https://rdcsolutions.tech/#attivita`
- Strutture: `https://rdcsolutions.tech/#strutture`

Genera i QR code **solo dopo** aver fissato il dominio definitivo: un QR
stampato punta a un indirizzo che non puoi più cambiare.

## Cosa conviene non toccare

- Il blocco `<style>` in cima a `index.html`: è tutto il disegno della pagina.
- Il file `_headers`: se lo cancelli il sito funziona lo stesso, ma perde le
  protezioni contro l'inclusione della pagina dentro siti di altri.
- La struttura dei titoli (`h1`, `h2`, `h3`): serve a Google e a chi naviga da
  lettore di schermo.

## Verifica prima di pubblicare

- Apri `sito/index.html` con doppio clic e leggila tutta dal telefono, non solo
  dal computer.
- Premi il tasto Tab più volte: ogni link deve mostrare un bordo ben visibile
  (blu su fondo chiaro, azzurro su fondo scuro). Se non si vede, qualcosa nel CSS è stato modificato.
- Tocca i due pulsanti in basso: devono aprire WhatsApp e il telefono.
- Prova gli indirizzi `.../#attivita` e `.../#strutture`: il titolo della
  sezione non deve finire sotto la barra in alto.
