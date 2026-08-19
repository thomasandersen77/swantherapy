# Oppgave: Legg til «Møt Pippi / Meet Pippi» i About-seksjonen

Arbeid videre i eksisterende React/Vite-prosjekt.

Ikke redesign siden og ikke endre eksisterende visuell stil.

## Mål

I seksjonen **«Historien bak Svanejenta / The story behind Svanejenta»** skal det legges til en ny del om svanen **Pippi**.

Denne delen skal komme **rett under de eksisterende avsnittene om historien bak Svanejenta**, og før/ved bildet av Pippi.

Strukturen skal visuelt være omtrent:

```text
Historien bak Svanejenta

[eksisterende avsnitt om Svanejenta]

Møt Pippi

[tekst om Pippi]

[bilde av Pippi]
```

På engelsk:

```text
The story behind Svanejenta

[existing story text]

Meet Pippi

[text about Pippi]

[image of Pippi]
```

---

# Norsk tekst

## Møt Pippi

Pippi er en svane som Svanejenta begynte å følge, mate og ta bilder av da hun fortsatt var en liten, grå svaneunge. Nå begynner Pippi å bli en ung svane, og fjærene hennes blir stadig hvitere.

Svanejenta har fått en helt spesiell kjærlighet til Pippi. Det mest fantastiske er at Pippi kjenner henne igjen.

Det er både givende og terapeutisk å oppleve tillit og nærhet fra et så vakkert dyr. For Svanejenta er det aller fineste at Pippi kjenner henne igjen når de møtes.

---

# English text

## Meet Pippi

Pippi is a swan that Svanejenta began following, feeding and photographing when she was still a small grey cygnet. Pippi is now growing into a young swan, and her feathers are gradually becoming whiter.

Svanejenta has developed a very special bond with Pippi. The most wonderful part is that Pippi recognizes her.

Experiencing trust and closeness from such a beautiful animal can feel deeply rewarding and therapeutic. For Svanejenta, the most special part is that Pippi recognizes her whenever they meet.

---

# Implementasjon

Bruk prosjektets eksisterende oversettelsesstruktur.

Ikke hardkod norsk eller engelsk tekst direkte i `About.tsx` dersom resten av siden bruker `translations.ts`.

Utvid eksisterende `translations.about` på en ryddig måte, for eksempel med verdier tilsvarende:

* `meetPippiHeading`
* `meetPippiParagraphs`

Bruk samme mønster som eksisterende `heading` og `paragraphs`.

## Heading-hierarki

`Historien bak Svanejenta` er hovedoverskriften for seksjonen.

`Møt Pippi` skal være en underoverskrift, altså normalt `<h3>` dersom eksisterende seksjonsoverskrift er `<h2>`.

Ikke bruk to `<h2>`-overskrifter bare fordi de skal ha omtrent samme visuelle stil.

CSS kan brukes til å gjøre `Møt Pippi` visuelt tydelig.

---

# Bilde av Pippi

Det finnes allerede et bilde av Pippi i prosjektet.

Behold bildet og plasser det naturlig sammen med den nye Pippi-teksten.

På desktop kan Pippi-delen gjerne få en ryddig layout med tekst og bilde dersom det passer dagens design.

På mobil skal rekkefølgen være:

1. `Møt Pippi`
2. teksten
3. bildet

Bildet skal:

* være responsivt
* aldri gå utenfor viewport
* beholde riktig aspect ratio
* ikke bli unødvendig stort
* passe inn med samme border-radius og visuelle stil som resten av siden

Hvis bildet ligger i Vites `public/images`, bruk riktig URL fra roten, for eksempel:

```tsx
<img src="/images/pippi_01.jpg" alt="Pippi" />
```

Ikke bruk en relativ sti som `../../public/images/...`.

---

# Mobile first

Kontroller spesielt Pippi-seksjonen på små skjermer.

På mobil:

* heading og tekst skal ha god luft
* teksten skal bruke tilgjengelig bredde uten å bli klemt
* bildet skal være `width: 100%` innenfor en fornuftig container
* unngå store faste høyder eller bredder
* ingen horisontal scrolling
* behold eksisterende rolige og luftige design

På desktop skal Pippi-seksjonen fortsatt passe naturlig inn i resten av About-seksjonen.

---

# Viktig

Ikke endre den eksisterende teksten om Svanejenta med mindre det er nødvendig for layouten.

Ikke legg til medisinske påstander.

Dette beskriver en personlig opplevelse av nærhet til naturen og Pippi, ikke dokumentert medisinsk behandling.

Bevar sidens eksisterende:

* typografi
* farger
* spacing
* språkbytte NO/EN
* responsive design

---

# Verifisering

Når endringen er ferdig:

1. Kontroller norsk visning.
2. Kontroller engelsk visning.
3. Kontroller mobilvisning.
4. Kontroller at Pippi-bildet lastes riktig.
5. Kjør:

```bash
npm run lint
npm run build
```

Begge skal fullføre uten feil.

Ikke commit eller push uten at jeg eksplisitt ber om det.
