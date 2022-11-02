const info = {
  language: 'Deutsch',
  name: 'hundert Wörter',
  author: 'Piotr I',
  description: 'this is not used yet',
};
const words = [
  {
    d: 'sein',
    pl: 'być',
  },
  {
    d: 'haben',
    pl: 'mieć',
  },
  {
    d: 'werden',
    pl: 'stać się, zostać',
  },
  {
    d: 'können',
    pl: 'móc, umieć, potrafić',
  },
  {
    d: 'müssen',
    pl: 'musieć',
  },
  {
    d: 'sagen',
    pl: 'powiedzieć',
  },
  {
    d: 'machen',
    pl: 'robić',
  },
  {
    d: 'geben',
    pl: 'dawać',
  },
  {
    d: 'kommen',
    pl: 'przychodzić, pochodzić',
  },
  {
    d: 'sollen',
    pl: 'mieć powinność',
  },
  {
    d: 'wollen',
    pl: 'chcieć',
  },
  {
    d: 'gehen',
    pl: 'iść',
  },
  {
    d: 'wissen',
    pl: 'wiedzieć',
  },
  {
    d: 'sehen',
    pl: 'widzieć',
  },
  {
    d: 'lassen',
    pl: 'pozwalać, kazać sobie coś zrobić',
  },
  {
    d: 'stehen',
    pl: 'stać',
  },
  {
    d: 'finden',
    pl: 'znajdować',
  },
  {
    d: 'bleiben',
    pl: 'zostać, pozostać',
  },
  {
    d: 'liegen',
    pl: 'leżeć',
  },
  {
    d: 'heißen',
    pl: 'nazywać się',
  },
  {
    d: 'denken',
    pl: 'myśleć',
  },
  {
    d: 'nehmen',
    pl: 'brać',
  },
  {
    d: 'tun',
    pl: 'czynić',
  },
  {
    d: 'dürfen',
    pl: 'mieć pozwolenie',
  },
  {
    d: 'glauben',
    pl: 'wierzyć, sądzić',
  },
  {
    d: 'halten',
    pl: 'trzymać, zatrzymywać',
  },
  {
    d: 'nennen',
    pl: 'nazywać',
  },
  {
    d: 'mögen',
    pl: 'lubić, chcieć',
  },
  {
    d: 'zeigen',
    pl: 'pokazywać',
  },
  {
    d: 'sprechen',
    pl: 'mówić, rozmawiać',
  },
  {
    d: 'bringen',
    pl: 'przynosić',
  },
  {
    d: 'leben',
    pl: 'żyć, mieszkać',
  },
  {
    d: 'fahren',
    pl: 'jechać, prowadzić',
  },
  {
    d: 'meinen',
    pl: 'sądzić, uważać',
  },
  {
    d: 'fragen',
    pl: 'pytać',
  },
  {
    d: 'kennen',
    pl: 'znać',
  },
  // {
  //   d: 'gelten',
  //   pl: 'być ważnym, obowiązywać',
  // },
  {
    d: 'stellen',
    pl: 'stawiać',
  },
  {
    d: 'spielen',
    pl: 'grać, bawić się',
  },
  {
    d: 'arbeiten',
    pl: 'pracować',
  },
  {
    d: 'brauchen',
    pl: 'potrzebować',
  },
  // {
  //   d: 'folgen',
  //   pl: 'śledzić',
  // },
  {
    d: 'lernen',
    pl: 'uczyć się',
  },
  // {
  //   d: 'bestehen',
  //   pl: 'istnieć',
  // },
  {
    d: 'verstehen',
    pl: 'rozumieć',
  },
  {
    d: 'setzen',
    pl: 'sadzać',
  },
  {
    d: 'bekommen',
    pl: 'dostać',
  },
  {
    d: 'beginnen',
    pl: 'zaczynać',
  },
  {
    d: 'erzählen',
    pl: 'opowiadać',
  },
  {
    d: 'versuchen',
    pl: 'próbować',
  },
  {
    d: 'schreiben',
    pl: 'pisać',
  },
  {
    d: 'laufen',
    pl: 'biec, biegać',
  },
  // {
  //   d: 'erklären',
  //   pl: 'wyjaśniać',
  // },
  // {
  //   d: 'entsprechen',
  //   pl: 'być zgodnym z czymś, odpowiadać czemuś',
  // },
  {
    d: 'sitzen',
    pl: 'siedzieć',
  },
  {
    d: 'ziehen',
    pl: 'ciągnąć',
  },
  {
    d: 'scheinen',
    pl: 'świecić, wydawać się',
  },
  {
    d: 'fallen',
    pl: 'upadać',
  },
  // {
  //   d: 'gehören',
  //   pl: 'należeć',
  // },
  // {
  //   d: 'entstehen',
  //   pl: 'powstawać',
  // },
  {
    d: 'erhalten',
    pl: 'odbierać',
  },
  {
    d: 'treffen',
    pl: 'spotykać',
  },
  {
    d: 'suchen',
    pl: 'szukać',
  },
  {
    d: 'legen',
    pl: 'kłaść',
  },
  // {
  //   d: 'vorstellen',
  //   pl: 'przedstawiać',
  // },
  // {
  //   d: 'handeln',
  //   pl: 'handlować, targować się',
  // },
  // {
  //   d: 'erreichen',
  //   pl: 'osiągać, docierać',
  // },
  {
    d: 'tragen',
    pl: 'nosić',
  },
  // {
  //   d: 'schaffen',
  //   pl: 'dawać radę, tworzyć',
  // },
  {
    d: 'lesen',
    pl: 'czytać',
  },
  {
    d: 'verlieren',
    pl: 'tracić, gubić',
  },
  // {
  //   d: 'darstellen',
  //   pl: 'obrazować, opisać',
  // },
  //   {
  //     d: 'erkennen',
  //     pl: 'rozpoznawać',
  //   },
  //   {
  //     d: 'entwickeln',
  //     pl: 'rozwijać, wynajdować',
  //   },
  //   {
  //     d: 'reden',
  //     pl: 'mówić, rozmawiać',
  //   },
  //   {
  //     d: 'aussehen',
  //     pl: 'wyglądać',
  //   },
  //   {
  //     d: 'erscheinen',
  //     pl: 'ukazywać się',
  //   },
  {
    d: 'bilden',
    pl: 'budować, tworzyć, kształcić',
  },
  // {
  //   d: 'anfangen',
  //   pl: 'zaczynać',
  // },
  //   {
  //     d: 'erwarten',
  //     pl: 'oczekiwać',
  //   },
  {
    d: 'wohnen',
    pl: 'mieszkać',
  },
  // {
  //   d: 'betreffen',
  //   pl: 'dotyczyć',
  // },
  {
    d: 'warten',
    pl: 'czekać',
  },
  {
    d: 'vergehen',
    pl: 'mijać, upływać',
  },
  {
    d: 'helfen',
    pl: 'pomagać',
  },
  {
    d: 'gewinnen',
    pl: 'wygrywać',
  },
  {
    d: 'schließen',
    pl: 'zamykać',
  },
  {
    d: 'fühlen',
    pl: 'czuć',
  },
  // {
  //   d: 'bieten',
  //   pl: 'oferować',
  // },
  {
    d: 'interessieren',
    pl: 'interesować',
  },
  // {
  //   d: 'erinnern',
  //   pl: 'przypominać coś sobie',
  // },
  //   {
  //     d: 'ergeben',
  //     pl: 'wynikać z czegoś',
  //   },
  // {
  //   d: 'anbieten',
  //   pl: 'oferować',
  // },
  {
    d: 'studieren',
    pl: 'studiować',
  },
  {
    d: 'verbinden',
    pl: 'łączyć',
  },
  // {
  //   d: 'ansehen',
  //   pl: 'spoglądać, patrzeć, oglądać',
  // },
  //   {
  //     d: 'fehlen',
  //     pl: 'brakować, być nieobecnym',
  //   },
  {
    d: 'bedeuten',
    pl: 'znaczyć',
  },
  // {
  //   d: 'vergleichen',
  //   pl: 'porównywać',
  // },
  {
    d: 'unser',
    pl: 'nasz',
  },
  {
    d: 'uns',
    pl: 'nas',
  },
  {
    d: 'euch',
    pl: 'was',
  },
  {
    d: 'euer',
    pl: 'wasz',
  },
  {
    d: 'ihr',
    pl: 'ich',
  },
  {
    d: 'sein',
    pl: 'jego',
  },
  {
    d: 'gegenüber',
    pl: 'naprzeciwko',
  },
  {
    d: 'lecker',
    pl: 'pyszne',
  },
  {
    d: 'vielleicht',
    pl: 'może',
  },
  {
    d: 'schmeckt',
    pl: 'smakować',
  },
  // {
  //   d: 'diese',
  //   pl: 'tą',
  // },
  {
    d: 'müde',
    pl: 'zmęczony',
  },
  {
    d: 'weil',
    pl: 'ponieważ',
  },
  {
    d: 'oder',
    pl: 'albo',
  },
  {
    d: 'obwohl',
    pl: 'chociaż',
  },
  {
    d: 'aber',
    pl: 'ale',
  },
  {
    d: 'damit',
    pl: 'żeby',
  },
  {
    d: 'wirklich',
    pl: 'naprawdę',
  },
  {
    d: 'anrufen',
    pl: 'dzwonić',
  },
];
const modules = { info, words };
export default modules;
