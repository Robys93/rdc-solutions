# RDC Solutions — contesto di progetto

Landing page di una sola pagina per l'attività di Roberto Di Castro (insegna:
RDC Solutions), supporto tecnologico e automazioni a Roma. La pagina è già
scritta e sta in `sito/index.html`. Si pubblica trascinando la cartella `sito/`
su Netlify (deploy manuale). Istruzioni operative in `README.md`, cose ancora
aperte in `DA-COMPLETARE.md`.

## Dati dell'attività (solo questi, non inventarne altri)

- Titolare: Roberto Di Castro. Insegna: RDC Solutions. Roma: a domicilio in
  città e da remoto.
- Telefono in pagina: +39 352 201 0159. Email: rdcsolutions.tech@gmail.com.
  Dominio: rdcsolutions.tech.
  GitHub: github.com/Robys93.
- Sviluppatore software. Prima del software: ristorazione e sanità.
- Lingue: italiano madrelingua, spagnolo B2, inglese B1.
- Lavori citabili: Unicum Collection (unicumcollection.com, suite ricettive a
  Trastevere: sito + dominio + email aziendali; permesso di citarla ottenuto),
  interventi di responsive design, business plan per un piccolo negozio
  specializzato.
- NON citare EventPro né Eleonora Inverno: non sono stati completati (tolti
  dalla pagina il 19/09/2026 su richiesta di Roberto).
- Partita IVA: non ancora aperta. Nel footer resta segnalata come da completare.

## Prezzi (tutti in chiaro, mai "su richiesta")

- Audit digitale: 250 €, circa 90 minuti sul posto, relazione scritta entro 3
  giorni lavorativi. È l'azione principale della pagina.
- Uscita a domicilio a Roma: 70 € la prima ora, poi 45 €/ora.
- Consulenza da remoto: 45 € per 45 minuti.
- Profilo Google completo: 300 €. Sincronizzazione calendari: da 400 €.
  Sito vetrina una pagina: da 900 €. Automazioni su misura: da 600 €.
- Pacchetto mensile 150 €/mese: fino a 4 richieste da remoto al mese con
  risposta entro 24 ore nei giorni feriali; 1 visita in sede a trimestre (le
  ulteriori a 50 € invece di 70 €); controllo mensile di profilo Google, backup
  e, dove presenti, calendari prenotazioni; gestione scadenze di dominio,
  hosting e licenze; disdetta con 30 giorni di preavviso.
- Tempi di risposta dichiarati: "entro 24 ore nei giorni feriali". Non
  scrivere "entro la giornata": Roberto non può garantirlo mentre lavora.

## Pubblico e obiettivo

Tre pubblici, in quest'ordine: piccole attività (1-10 persone: ristoranti,
bar, negozi, studi), strutture ricettive di Roma (B&B, affittacamere, case
vacanza da 2 a 8 camere, gestione familiare), privati. Tutti leggono dal
telefono, poco tempo, poca dimestichezza tecnica. Obiettivo unico: farsi
contattare via WhatsApp o telefono per prenotare l'audit.

Posizionamento: né "programmatore" né "tecnico che aggiusta i computer". La
persona che risolve i problemi tecnologici che fanno perdere tempo e clienti,
e che quando serve costruisce quello che non esiste.

## Regole non negoziabili

- Non inventare esperienze, clienti, numeri, anni di attività,
  certificazioni o testimonianze. Se manca un'informazione, chiederla e
  segnare il punto nel codice con un commento `DA COMPLETARE`.
- Nessun prezzo nascosto, nessun risultato garantito.
- Dati ospiti: si può scrivere che la raccolta dei dati pre-arrivo e la
  preparazione dei file da inviare sono automatizzate. NON promettere l'invio
  automatico ai portali della Pubblica Amministrazione.
- Tono: italiano diretto, frasi corte, prima persona. Vietati: "passione per
  la tecnologia", "soluzioni innovative", "al tuo fianco", "chiavi in mano",
  "a 360 gradi", "dalla A alla Z", punti esclamativi, gergo da sviluppatore,
  inglese non necessario. Ogni frase deve dare un'informazione nuova.

## Vincoli tecnici

- Un solo file HTML con CSS inline. Nessun framework, nessuna dipendenza
  esterna, nessuna immagine o font remoto.
- Eccezioni decise da Roberto il 19/09/2026: screenshot dei lavori veri in
  `sito/img/` (webp, file locali) e un solo script locale, `animazioni.js`, per
  far comparire le sezioni allo scorrimento. Lo script rispetta "riduci
  animazioni" e, se non parte, la pagina resta visibile. Il CSP in `_headers`
  permette solo `script-src 'self'`. Font esterni: no (scelta sua).
- Nessun modulo di contatto, nessuna statistica, nessun cookie.
- Mobile first. Accessibile: contrasto, focus visibile, heading corretti.
- Ancore stabili `#attivita` e `#strutture` (destinazioni dei QR code): devono
  restare comprensibili anche arrivandoci direttamente, con un riquadro
  contatti dentro ciascuna. `scroll-margin-top` evita che la barra in alto
  copra i titoli.
- Messaggi WhatsApp precompilati diversi: generico, `#attivita` ("ho
  un'attività a Roma"), `#strutture` ("ho una struttura ricettiva a Roma").

## Direzione visiva scelta

"Chiaro e moderno", scelta da Roberto il 19/09/2026 dopo aver bocciato la
versione precedente ("listino, non brochure": troppo spoglia, sembrava un
documento). Il sito è il suo biglietto da visita e deve far vedere che sa
costruire le cose.

- Fondo bianco, sezioni alternate su `#F4F7F6` (attività) e `#FBF7EC`
  (strutture). Inchiostro `#0E1A1C`, ottanio `#0B5750` per azioni e cifre,
  giallo `#F0C63C` per le cifre su fondo scuro e per l'evidenza, ocra
  `#8A6A00` per la verticale strutture.
- Titoli grandi e compatti, font di sistema. Bottoni a pillola. Angoli
  arrotondati, bordi sottili, ombre solo sulle cornici degli screenshot.
- Su computer due colonne (titolo fisso a sinistra, contenuto a destra): lo
  spazio non resta vuoto.
- Il lavoro per Unicum Collection è mostrato in una cornice da browser nella
  testata e nella sezione "L'ultimo lavoro" (`#lavori`). Logo: quadrato ottanio con "R" e
  una fascia gialla (anche favicon e icona per la schermata home).
- Da evitare: pagina che sembra un documento di testo, colonna stretta con
  metà schermo vuoto, card identiche con ombra pesante, frecce nei bottoni.

## Stato al 19 settembre 2026

- Pagina ridisegnata il 19/09/2026 (direzione "chiaro e moderno") e
  ricontrollata: nessuna parola vietata, nessuna risorsa esterna, heading in
  ordine, testi e prezzi invariati.
- Roberto sta completando la lista in `DA-COMPLETARE.md`. Punto aperto da
  chiarire con lui: il numero 347 196 8618, che ha fornito senza dire cos'è.
  Non è in pagina.
- La vecchia cartella `~/supporto-tecnologico/` contiene la versione
  precedente (intestata solo a nome suo). In attesa di decidere se cancellarla.
