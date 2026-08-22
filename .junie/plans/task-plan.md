---
sessionId: session-260822-181039-5hm2
---

# Requirements

### Goal
Vis både Pippi 1 og Pippi 2 sammen i «Møt Pippi»-seksjonen, side om side i en balansert og responsiv layout.

### Acceptance Criteria
- Begge bildene rendres under eksisterende tekst i «Møt Pippi».
- Bildene har lik visuell størrelse, naturlig avstand og følger seksjonens eksisterende bredde og avrunding.
- Layouten er ryddig på både smale og brede skjermer uten horisontal scrolling eller forvrengning.
- Begge bildene beholder responsive WebP/JPEG-kilder, lazy loading og meningsfulle norske/engelske alt-tekster.
- Ingen tekst, øvrige bilder eller eksisterende lokale endringer i About-seksjonen påvirkes.

# Technical Design

### Current Implementation
- `src/components/About.tsx` peker nå bare på `pippi_02` og rendrer ett responsivt `<picture>` i `.meet_pippi`.
- `src/components/About.css` sentrerer ett `.meet_pippi__image` med maksimal bredde 360 px; `.about` har maksimal bredde 760 px.
- `public/images/` inneholder komplette `pippi_01`- og `pippi_02`-sett i JPEG og WebP, inkludert variantene 640, 1024 og 1600 px.
- `src/components/Gallery.css` bruker CSS Grid som etablert mønster for grupper av bilder.

### Proposed Changes
- Oppdater `About.tsx` til å beskrive og rendre begge Pippi-bildene gjennom samme eksisterende responsive bildebygger, uten dupliserte URL-konstanter.
- Legg begge `<picture>`-elementene i en egen bildegruppe under teksten og gi hvert bilde en presis, språktilpasset alt-tekst.
- Oppdater `About.css` med en to-kolonne-grid for bildegruppen, lik kolonnebredde og responsivt mellomrom; la bildene fylle hver kolonne med naturlig høyde og uendret `border-radius`/`object-fit`.
- Behold paret side om side også på små skjermer, men reduser mellomrommet responsivt slik at begge portrettbildene forblir tydelige innenfor viewporten.

### Risks
- De to originalene kan ha litt ulikt sideforhold; naturlig høyde unngår beskjæring, mens lik kolonnebredde gir visuell balanse.
- `sizes` må samsvare med halv seksjons-/viewportbredde, slik at nettleseren ikke laster unødvendig store filer når to bilder deler raden.

# Testing

### Validation Approach
- Kjør prosjektets lint- og build-kommandoer for å fange TypeScript-, JSX-, CSS- og asset-referansefeil.
- Kontroller komponenten på mobil- og desktopbredde: begge bilder skal ligge side om side, være jevnt justert og ikke skape overflow.
- Bekreft at nettleseren kan velge både WebP- og JPEG-kilder for `pippi_01` og `pippi_02`, og at øvrig About-innhold er uendret.