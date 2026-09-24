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
- Partita IVA: non ancora aperta. Per ora lavora con ricevuta per prestazione
  occasionale (scritto nel footer e sotto il listino). Non scrivere diciture
  fiscali a memoria: vanno dal commercialista.
- Formazione (sezione `#certificazioni`): attestato di qualifica "Full Stack
  Web Developer – Programmatore informatico", Istituto G. Meschini, 540 ore,
  esame con commissione Regione Lazio il 04/02/2026. Corsi Profession AI con
  link di verifica: Agenti AI Foundation (12 ore), Programmazione con Python
  (12 ore), Fondamenti di Machine Learning (8 ore). L'anno dei corsi Profession
  AI non è sui certificati: non scriverlo finché Roberto non lo dice. Non
  pubblicare voti, data o luogo di nascita.

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
  permette solo `script-src 'self'` e `font-src 'self'`. Caratteri: file
  locali in `sito/fonts/`, mai chiamate a Google Fonts.
- Nessun modulo di contatto, nessuna statistica, nessun cookie.
- Mobile first. Accessibile: contrasto, focus visibile, heading corretti.
- Ancore stabili `#attivita` e `#strutture` (destinazioni dei QR code): devono
  restare comprensibili anche arrivandoci direttamente, con un riquadro
  contatti dentro ciascuna. `scroll-margin-top` evita che la barra in alto
  copra i titoli.
- Messaggi WhatsApp precompilati diversi: generico, `#attivita` ("ho
  un'attività a Roma"), `#strutture` ("ho una struttura ricettiva a Roma").

## Direzione visiva scelta

"v3", scelta da Roberto il 21-22/09/2026 in Claude Design dopo aver bocciato
"chiaro e moderno" (colori ottanio/giallo giudicati brutti, poco movimento,
logo non suo). Il sito è il suo biglietto da visita e deve far vedere che sa
costruire le cose.

- Fondo grafite `#070C18`, sezioni chiare su `#F5F7FA` (audit, verticali,
  certificazioni). Blu elettrico `#053BF6` e navy `#0D2C54` del marchio,
  azzurro `#2BB3E8` come secondo accento, gradiente blu→azzurro per azioni e
  cifre. Niente ottanio, niente giallo.
- Caratteri: Space Grotesk (titoli), Manrope (testo), JetBrains Mono
  (etichette).
- Movimento: pannello "audit in corso" in testata, striscia di servizi che
  scorre, contatori, comparsa allo scorrimento, barra di lettura.
- Su computer due colonne (titolo fisso a sinistra, contenuto a destra): lo
  spazio non resta vuoto.
- Logo: il wordmark di Roberto (`sito/logo-rdc-chiaro.svg` su fondo scuro,
  `sito/logo-rdc.svg` su fondo chiaro). Favicon e icona per la schermata home:
  la "R" del logo su quadrato navy.
- Da evitare: pagina che sembra un documento di testo, colonna stretta con
  metà schermo vuoto, card identiche con ombra pesante, frecce nei bottoni.

## Stato al 24 settembre 2026

- Pagina ridisegnata con la direzione "v3" (PR #1): testi e prezzi invariati,
  nessuna risorsa esterna. Certificazioni e nota fiscale compilate il
  24/09/2026.
- Roberto sta completando la lista in `DA-COMPLETARE.md`. Punto aperto da
  chiarire con lui: il numero 347 196 8618, che ha fornito senza dire cos'è.
  Non è in pagina.
- La vecchia cartella `~/supporto-tecnologico/` contiene la versione
  precedente (intestata solo a nome suo). In attesa di decidere se cancellarla.
