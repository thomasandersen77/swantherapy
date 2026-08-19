# Oppgave: Ferdigstill Svanejenta-landingssiden

Du arbeider som coding agent direkte i det åpne JetBrains-prosjektet.

Repository:
`thomasandersen77/swantherapy`

Dette er allerede en fungerende React + Vite + TypeScript-landingsside.

## Arbeidsmåte

Før du gjør endringer:

1. Utforsk hele relevant prosjektstruktur.
2. Les eksisterende React-komponenter og tilhørende CSS.
3. Les `package.json`.
4. Se hvordan bilder i `images/` og `public/images/` håndteres.
5. Se hvordan NO/EN-språkbytte fungerer.
6. Lag en kort intern plan før du begynner å redigere.

Deretter skal du implementere oppgaven direkte i prosjektet.

Du kan:
- redigere nødvendige prosjektfiler
- kjøre `npm run lint`
- kjøre `npm run build`
- bruke terminalkommandoer som er nødvendige for å verifisere løsningen

Du skal ikke:
- committe
- pushe
- opprette branch
- installere nye dependencies uten at det faktisk er nødvendig
- redesigne eller refaktorere ting som ikke er relevante for oppgaven

Bevar eksisterende arkitektur og visuell stil.

# Oppgave: Ferdigstill Svanejenta-landingssiden

Arbeid videre på eksisterende repository:

`thomasandersen77/swantherapy`

Dette er allerede en fungerende React + Vite + TypeScript-landingsside. Ikke bygg siden på nytt og ikke innfør et nytt rammeverk.

Før du endrer noe:

1. Les eksisterende React-komponenter.
2. Les CSS-filene til komponentene.
3. Se hvordan språkbytte NO/EN fungerer.
4. Se hvordan bildene i `images/` og `public/images/` brukes.
5. Bevar eksisterende visuell identitet, typografi, gulltoner, luft og rolige uttrykk.

Målet er å forbedre eksisterende løsning, ikke redesigne den fra scratch.

---

# 1. Bilder

Følgende bilder er allerede kopiert inn i prosjektets `images/`-mappe:

* `swan-curved-neck-golden-hour.png`
* `swan-misty-lake-sunrise.png`
* `swan-with-cygnets-sunrise.png`
* `two-swans-meadow-river-sunset.png`
* `two-swans-mountain-lake-sunset.png`

Eksisterende løsning har allerede laget/bruker responsive JPG- og WebP-varianter under `public/images`.

**Bevar denne mekanismen.**

Ikke legg inn eksterne bilde-URL-er.

Ikke erstatt bildene med placeholders.

Ikke legg til et tungt image-library hvis dagens løsning fungerer.

Bruk responsive bilder med passende `srcSet`, `sizes`, lazy loading og WebP/JPG fallback der det allerede er etablert.

---

# 2. Vurder plassering og cropping av bildene

Se gjennom hvordan de fem bildene brukes på siden.

Bildene skal føles som en del av historien, ikke bare som dekorasjon.

Prioriter:

* svanen skal ikke bli beskåret på en unaturlig måte
* viktige deler av landskapet skal beholdes
* `object-fit: cover` kan brukes, men vurder `object-position` individuelt der det gir et bedre utsnitt
* bildene skal fungere både på smal mobil og stor desktop
* store landskapsbilder kan gjerne få litt mer bredde der designet tåler det
* behold den rolige, luftige følelsen

Ikke gjør alle bilder like store bare for symmetriens skyld dersom et annet utsnitt fungerer bedre visuelt.

---

# 3. Alt-tekst

Gå gjennom alt-tekstene til bildene.

De skal være:

* korte
* naturlige
* beskrivende
* relevante for faktisk motiv
* tilgjengelige på både norsk og engelsk

Unngå filnavn-lignende språk.

For eksempel kan:

`Svane med buet hals i gull-lys`

forbedres til noe i retning av:

`Svane ved vannkanten i gyllent morgenlys`

og på engelsk:

`Swan by the water in soft golden morning light`

Bruk faktisk motiv som grunnlag. Ikke dikt opp steder eller geografiske navn.

Ikke legg synlige captions under bildene med mindre det faktisk forbedrer designet.

---

# 4. Mobile first / mobilopplevelse

Siden skal være svært god på mobil.

Eksisterende CSS har allerede responsive regler. Ikke skriv alt om uten grunn, men gå gjennom hele siden med **mobile-first-prinsipper**.

Kontroller spesielt bredder rundt:

* 320 px
* 375 px
* 390 px
* 430 px
* 768 px
* desktop

Mobile first betyr først og fremst at mobilopplevelsen skal være førsteklasses. Det er ikke et mål i seg selv å omskrive alle eksisterende media queries dersom dagens struktur er enklere og fungerer godt.

## Header

Kontroller:

* logo/#Svanejenta skal ikke konkurrere om plass med navigasjonen
* hamburgermeny skal fungere på liten skjerm
* NO / EN skal være lett tilgjengelig
* touch targets skal være store nok
* menyen skal ikke gi horisontal scrolling
* menyen skal kunne lukkes på en intuitiv måte
* keyboard/focus states skal fungere

## Hero

På mobil:

* unngå enorm tom høyde før overskriften
* logoen skal være tydelig, men ikke dominere skjermen
* overskriften må brytes pent
* ingress skal ha god lesbar linjelengde
* CTA-knappene bør stackes dersom de ellers blir trange
* knappene må ha gode touch targets

Behold den luftige følelsen, men reduser unødvendig vertikal whitespace på små skjermer.

## Swan Therapy / Nature

På desktop kan tekst og bilde stå ved siden av hverandre.

På mobil skal de ligge naturlig i én kolonne.

Prioriter:

1. overskrift
2. relevant bilde eller introduksjon
3. tekst

Velg den rekkefølgen som gir best leseopplevelse i den aktuelle seksjonen.

Bildene må ikke bli svært høye portrettblokker på mobil dersom et bredere utsnitt fungerer bedre.

## Three principles

På mobil:

`Slow down / Notice / Be present`

skal være en enkel vertikal flyt dersom tre kolonner blir for trangt.

Det skal være lett å skanne og mye nok luft mellom punktene.

## Gallery

Eksisterende galleri bruker responsive kolonner.

Kontroller at:

* mobil fungerer godt med én kolonne
* tablet fungerer med 2 kolonner dersom det ser riktig ut
* desktop kan bruke 3 kolonner
* bildene ikke blir unaturlig beskåret
* avstanden mellom bildene er passe
* ingen horisontal scrolling oppstår

---

# 5. Instagram

Instagram-profil:

`https://www.instagram.com/svanejenta/`

Knappen:

**Follow #Svanejenta**

skal lenke direkte til denne Instagram-profilen.

Den skal ikke være en vanlig button dersom handlingen faktisk er navigasjon. Bruk semantisk korrekt `<a>` stylet som eksisterende primærknapp.

Å klikke knappen kan ikke automatisk utføre selve Follow-handlingen inne på Instagram. Brukeren skal derfor tas direkte til profilen hvor Instagram håndterer innlogging og Follow.

Åpne ekstern profil i ny fane:

```text
target="_blank"
rel="noopener noreferrer"
```

Bruk en tilgjengelig `aria-label` hvis nødvendig.

---

# 6. Facebook

Facebook-profil:

`https://www.facebook.com/marit.gsamuelsen/`

Den eksisterende teksten `Facebook` nederst i kontaktseksjonen skal lenke til denne URL-en.

Instagram-teksten ved siden av skal lenke til:

`https://www.instagram.com/svanejenta/`

Begge:

* skal være faktiske `<a>`-elementer
* åpnes i ny fane
* bruke `rel="noopener noreferrer"`
* skal beholde dagens rolige visuelle stil
* skal ha tydelige focus states

---

# 7. Sosial CTA

Behold hoved-CTA:

**Follow #Svanejenta**

Men gjør hierarkiet tydelig:

Primær handling:

**Follow #Svanejenta** → Instagram

Sekundære tekstlenker:

`Instagram`
`Facebook`

Det trenger ikke legges til store Instagram/Facebook-logoer dersom det gjør designet mer «social media marketing»-aktig.

Siden skal fortsatt oppleves som:

**natur + svaner + ro + nærvær**

ikke som en influencer-landingsside.

---

# 8. Teksten

Ikke skriv om alt innholdet.

Dagens tone fungerer godt:

* personlig
* rolig
* enkel
* ikke medisinsk
* ingen overdrevne helsepåstander

Behold spesielt skillet om at Swan Therapy **ikke er medisinsk behandling**.

Du kan gjøre små språklige forbedringer dersom teksten:

* høres unaturlig ut på engelsk
* får dårlig linjebryting
* gjentar seg
* ikke passer sammen med bildet ved siden av

Men vis en kort oppsummering av alle tekstendringer du eventuelt gjør.

Ikke gjør teksten mer reklamepreget.

---

# 9. Accessibility

Kontroller:

* semantisk HTML
* riktig heading-hierarki
* alt-tekst
* focus-visible
* keyboard navigation
* knapp vs. lenke-semantikk
* tilstrekkelig kontrast
* touch targets
* `prefers-reduced-motion`
* språkvelgeren
* mobilmenyen

Ikke fjern eksisterende accessibility-støtte.

---

# 10. Performance

Dette er en enkel statisk landingsside.

Ikke overarkitekter.

Behold:

* React
* Vite
* TypeScript
* eksisterende CSS-struktur
* eksisterende responsive image-opplegg

Unngå nye dependencies dersom problemet kan løses med vanlig React og CSS.

Kontroller at store originale PNG-bilder ikke sendes direkte til klienten dersom optimaliserte WebP/JPG-versjoner allerede finnes.

---

# 11. Visuell retning

Behold dagens design:

* off-white / ivory
* sand
* dempet gull
* varm grå
* forsiktig sage
* Cormorant Garamond-lignende serif
* mye whitespace
* få visuelle effekter

Ikke introduser:

* kraftige gradients
* mørkt tema
* glassmorphism
* store skygger
* neon
* sterke Instagram-farger
* unødvendige cards
* tunge animasjoner

Målet er fortsatt:

**rolig, personlig, nordisk, naturorientert og elegant.**

---

# 12. Arbeidsmåte

Gjør endringene direkte i eksisterende filer der det er naturlig.

Ikke refaktorer fungerende kode bare for å endre struktur.

Etter endringene:

```bash
npm run lint
npm run build
```

Begge skal være grønne.

Kontroller deretter siden manuelt/responsivt på minst:

* 375 px
* 430 px
* 768 px
* desktop

Se spesielt etter:

* overflow
* tekst som blir for bred
* dårlig bilde-cropping
* for store tomrom
* dårlig mobilmeny
* CTA-knapper som blir for små
* bilder som gir layout shift

---

# 13. Før du avslutter

Gi meg en kort rapport med:

1. hvilke filer du endret
2. hvilke mobile forbedringer du gjorde
3. hvordan bildene ble justert
4. eventuelle tekstendringer
5. hvordan Instagram/Facebook-lenkene fungerer
6. resultatet fra `npm run lint`
7. resultatet fra `npm run build`

Ikke commit eller push før jeg eksplisitt ber om det.
