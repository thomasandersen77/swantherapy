export type Lang = 'no' | 'en';

export const translations = {
  nav: {
    no: ['Om', 'Svaneterapi', 'Naturen', 'Kontakt'],
    en: ['About', 'Swan Therapy', 'Nature', 'Contact'],
  },
  navIds: ['about', 'therapy', 'nature', 'contact'],

  hero: {
    no: {
      heading: 'Ro finner ikke alltid veien til oss. Noen ganger må vi finne veien til den.',
      body: 'Ved vannet, mellom naturens lyder og svanenes rolige bevegelser, kan tempoet senkes.',
      emphasis: 'Svanejenta handler om de små øyeblikkene der naturen får være terapi for sjelen.',
      cta: 'Oppdag svaneterapi',
      secondary: 'Les historien',
    },
    en: {
      heading: 'Peace does not always find us. Sometimes we have to find our way to it.',
      body: 'By the water, surrounded by the sounds of nature and the quiet movement of swans, life can slow down.',
      emphasis: 'Svanejenta is about those small moments when nature becomes therapy for the soul.',
      cta: 'Discover Swan Therapy',
      secondary: 'Our story',
    },
  },

  therapy: {
    no: {
      heading: 'Svaneterapi',
      paragraphs: [
        'Svaneterapi er ikke en behandlingsform. Det er et navn på noe mye enklere.',
        'Det handler om å stoppe opp.',
        'Å gå ned til vannet. Se hvordan svanene beveger seg. Høre vinden, vannet og lydene rundt seg. Legge bort telefonen et øyeblikk og bare være til stede.',
        'For noen kan naturen være et sted hvor tankene får litt mer plass og kroppen får litt mindre å forholde seg til.',
        'Svanene krever ingenting. De bare er der.',
        'Og noen ganger er det nettopp det vi trenger.',
      ],
    },
    en: {
      heading: 'Swan Therapy',
      paragraphs: [
        'Swan Therapy is not a medical treatment. It is a name for something much simpler.',
        'It is about slowing down.',
        'Walking down to the water. Watching the swans move. Listening to the wind, the water and the sounds around you. Putting the phone away for a moment and simply being present.',
        'For some of us, nature can be a place where our thoughts have more room and life asks a little less of us.',
        'The swans demand nothing. They are simply there.',
        'And sometimes, that is exactly what we need.',
      ],
    },
  },

  nature: {
    no: {
      heading: 'Naturen som pusterom',
      paragraphs: [
        'Vi lever omgitt av varsler, avtaler, skjermer og forventninger.',
        'Naturen fungerer annerledes.',
        'Vannet har sitt eget tempo. Årstidene kommer når de kommer. Svanene beveger seg uten kalender og uten hastverk.',
        'Å være ute trenger ikke handle om trening, prestasjon eller hvor langt man går.',
        'Noen ganger holder det å finne et sted man liker, sette seg ned og se på livet rundt seg.',
      ],
    },
    en: {
      heading: 'Nature as a place to breathe',
      paragraphs: [
        'We live surrounded by notifications, appointments, screens and expectations.',
        'Nature works differently.',
        'The water moves at its own pace. The seasons arrive when they arrive. The swans move without calendars and without hurry.',
        'Being outdoors does not have to be about exercise, achievement or how far you walk.',
        'Sometimes it is enough to find a place you like, sit down and simply watch the world around you.',
      ],
    },
  },

  principles: {
    no: [
      { title: 'Stopp opp', body: 'Du trenger ikke gjøre noe.\nBare gi deg selv noen minutter uten et mål.' },
      { title: 'Se', body: 'Legg merke til vannet, fuglene, lyset og bevegelsene rundt deg.' },
      { title: 'Vær der', body: 'Ikke prøv å få noe bestemt ut av øyeblikket.\nBare vær til stede.' },
    ],
    en: [
      { title: 'Slow down', body: 'You do not have to accomplish anything.\nGive yourself a few minutes without a goal.' },
      { title: 'Notice', body: 'Notice the water, the birds, the light and the movement around you.' },
      { title: 'Be present', body: 'Do not try to get something specific from the moment.\nSimply be there.' },
    ],
  },

  quote: {
    no: 'Noen ganger trenger man ikke et svar. Man trenger bare et sted hvor tankene kan få være i fred.',
    en: 'Sometimes you do not need an answer. You simply need a place where your thoughts can be left in peace.',
  },

  about: {
    no: {
      heading: 'Historien bak Svanejenta',
      paragraphs: [
        'Svanejenta startet med en kjærlighet til svanene, naturen og de stille stundene ved vannet.',
        'Det som begynte som små øyeblikk ute i naturen fikk etter hvert sitt eget navn: <strong>svaneterapi</strong>.',
        'Ikke som behandling. Ikke som en metode.',
        'Bare som en påminnelse om hvor mye noe så enkelt som natur, dyr og stillhet kan bety.',
      ],
    },
    en: {
      heading: 'The story behind Svanejenta',
      paragraphs: [
        'Svanejenta began with a love for swans, nature and quiet moments by the water.',
        'What started as small moments outdoors eventually got its own name: <strong>Swan Therapy</strong>.',
        'Not as treatment. Not as a method.',
        'Simply as a reminder of how much something as simple as nature, animals and silence can mean.',
      ],
    },
  },

  gallery: {
    no: { heading: 'Øyeblikk' },
    en: { heading: 'Moments' },
  },

  contact: {
    no: {
      heading: 'Finn ditt eget pusterom',
      body: 'Du trenger ikke reise langt.\nKanskje ditt sted allerede finnes rundt neste sving, ved vannet eller langs en sti du har gått forbi hundre ganger.',
      cta: 'Følg #Svanejenta',
    },
    en: {
      heading: 'Find your own place to breathe',
      body: 'You do not have to travel far.\nMaybe your place is already around the next corner, beside the water or along a path you have walked past a hundred times.',
      cta: 'Follow #Svanejenta',
    },
  },

  footer: {
    no: 'Natur · Svaner · Stille øyeblikk',
    en: 'Nature · Swans · Quiet moments',
  },
} as const;
