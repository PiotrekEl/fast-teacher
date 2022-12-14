const info = {
  language: 'English',
  name: 'irregular verbs',
  author: 'Piotr I',
  description: 'this is not used yet',
};
const words = [
  {
    pl: 'być',
    present: 'be',
    past: 'was',
    participle: 'been',
  },
  {
    pl: 'stać się',
    present: 'become',
    past: 'became',
    participle: 'become',
  },
  {
    pl: 'zaczynać',
    present: 'begin',
    past: 'began',
    participle: 'begun',
  },
  {
    pl: 'łamać',
    present: 'break',
    past: 'broke',
    participle: 'broken',
  },
  {
    pl: 'przynosić',
    present: 'bring',
    past: 'brought',
    participle: 'brought',
  },
  {
    pl: 'budować',
    present: 'build',
    past: 'built',
    participle: 'built',
  },
  {
    pl: 'kupować',
    present: 'buy',
    past: 'bought',
    participle: 'bought',
  },
  {
    pl: 'łapać',
    present: 'catch',
    past: 'caught',
    participle: 'caught',
  },
  {
    pl: 'wybierać',
    present: 'choose',
    past: 'chose',
    participle: 'chosen',
  },
  {
    pl: 'przychodzić',
    present: 'come',
    past: 'came',
    participle: 'come',
  },
  {
    pl: 'zajmować się',
    present: 'deal',
    past: 'dealt',
    participle: 'dealt',
  },
  {
    pl: 'robić',
    present: 'do',
    past: 'did',
    participle: 'done',
  },
  {
    pl: 'rysować',
    present: 'draw',
    past: 'drew',
    participle: 'drawn',
  },
  {
    pl: 'pić',
    present: 'drink',
    past: 'drank',
    participle: 'drunk',
  },
  {
    pl: 'kierować prowadzić',
    present: 'drive',
    past: 'drove',
    participle: 'driven',
  },
  {
    pl: 'jeść',
    present: 'eat',
    past: 'ate',
    participle: 'eaten',
  },
  {
    pl: 'spadać',
    present: 'fall',
    past: 'fell',
    participle: 'fallen',
  },
  {
    pl: 'karmić',
    present: 'feed',
    past: 'fed',
    participle: 'fed',
  },
  {
    pl: 'czuć się',
    present: 'feel',
    past: 'felt',
    participle: 'felt',
  },
  {
    pl: 'znalezć',
    present: 'find',
    past: 'found',
    participle: 'found',
  },
  {
    pl: 'latać',
    present: 'fly',
    past: 'flew',
    participle: 'flown',
  },
  {
    pl: 'zabraniać',
    present: 'forbit',
    past: 'forbate',
    participle: 'forbidden',
  },
  {
    pl: 'zapomnieć',
    present: 'forget',
    past: 'forgot',
    participle: 'forgotten',
  },
  {
    pl: 'marznąć',
    present: 'freeze',
    past: 'froze',
    participle: 'frozen',
  },
  {
    pl: 'dostać',
    present: 'get',
    past: 'got',
    participle: 'got',
  },
  {
    pl: 'dawać',
    present: 'give',
    past: 'gave',
    participle: 'given',
  },
  {
    pl: 'iść',
    present: 'go',
    past: 'went',
    participle: 'gone',
  },
  {
    pl: 'rosnąć',
    present: 'grow',
    past: 'grew',
    participle: 'grown',
  },
  {
    pl: 'wisieć coś',
    present: 'hang',
    past: 'hung',
    participle: 'hung',
  },
  {
    pl: 'mieć',
    present: 'have',
    past: 'had',
    participle: 'had',
  },
  {
    pl: 'słyszeć',
    present: 'hear',
    past: 'heard',
    participle: 'heard',
  },
  {
    pl: 'chować',
    present: 'hide',
    past: 'hid',
    participle: 'hidden',
  },
  {
    pl: 'trzymać',
    present: 'hold',
    past: 'held',
    participle: 'held',
  },
  {
    pl: 'wiedzieć',
    present: 'know',
    past: 'knew',
    participle: 'known',
  },
  {
    pl: 'układać',
    present: 'lay',
    past: 'laid',
    participle: 'laid',
  },
  {
    pl: 'przewodzić',
    present: 'lead',
    past: 'led',
    participle: 'led',
  },
  {
    pl: 'uczyć',
    present: 'learn',
    past: 'learnt',
    participle: 'learnt',
  },
  {
    pl: 'opuszczać',
    present: 'leave',
    past: 'left',
    participle: 'left',
  },
  {
    pl: 'pożyczać',
    present: 'lend',
    past: 'lent',
    participle: 'lent',
  },
  {
    pl: 'połozyć się',
    present: 'lie',
    past: 'lay',
    participle: 'lain',
  },
  {
    pl: 'gubić',
    present: 'lose',
    past: 'lost',
    participle: 'lost',
  },
  {
    pl: 'tworzyć',
    present: 'make',
    past: 'made',
    participle: 'made',
  },
  {
    pl: 'znaczyć',
    present: 'mean',
    past: 'meant',
    participle: 'meant',
  },
  {
    pl: 'spotykać',
    present: 'meet',
    past: 'met',
    participle: 'met',
  },
  {
    pl: 'płacić',
    present: 'pay',
    past: 'paid',
    participle: 'paid',
  },
  {
    pl: 'jechać',
    present: 'ride',
    past: 'rode',
    participle: 'ridden',
  },
  {
    pl: 'dzwonić',
    present: 'ring',
    past: 'rang',
    participle: 'rung',
  },
  {
    pl: 'wschodzić',
    present: 'rise',
    past: 'rose',
    participle: 'risen',
  },
  {
    pl: 'biec',
    present: 'run',
    past: 'ran',
    participle: 'run',
  },
  {
    pl: 'piłować',
    present: 'saw',
    past: 'sawed',
    participle: 'sawn',
  },
  {
    pl: 'mówić',
    present: 'say',
    past: 'said',
    participle: 'said',
  },
  {
    pl: 'widzieć',
    present: 'see',
    past: 'saw',
    participle: 'seen',
  },
  {
    pl: 'sprzedać',
    present: 'sell',
    past: 'sold',
    participle: 'sold',
  },
  {
    pl: 'wysłać',
    present: 'send',
    past: 'sent',
    participle: 'sent',
  },
  {
    pl: 'trząść',
    present: 'shake',
    past: 'shook',
    participle: 'shaken',
  },
  {
    pl: 'strzelać',
    present: 'shoot',
    past: 'shot',
    participle: 'shot',
  },
  {
    pl: 'pokazywać',
    present: 'show',
    past: 'showed',
    participle: 'shown',
  },
  {
    pl: 'siadać',
    present: 'sit',
    past: 'sat',
    participle: 'sat',
  },
  {
    pl: 'spać',
    present: 'sleep',
    past: 'slept',
    participle: 'slept',
  },
  {
    pl: 'rozmawiać',
    present: 'speak',
    past: 'spoke',
    participle: 'spoken',
  },
  {
    pl: 'spędzać',
    present: 'spend',
    past: 'spent',
    participle: 'spent',
  },
  {
    pl: 'rozposcierać',
    present: 'spread',
    past: 'spread',
    participle: 'spread',
  },
  {
    pl: 'stać',
    present: 'stand',
    past: 'stood',
    participle: 'stood',
  },
  {
    pl: 'kraść',
    present: 'steal',
    past: 'stole',
    participle: 'stolen',
  },
  {
    pl: 'wsadzić',
    present: 'stick',
    past: 'stuck',
    participle: 'stuck',
  },
  {
    pl: 'brać',
    present: 'take',
    past: 'took',
    participle: 'taken',
  },
  {
    pl: 'uczyć kogoś',
    present: 'teach',
    past: 'taught',
    participle: 'taught',
  },
  {
    pl: 'rozerwać',
    present: 'tear',
    past: 'tore',
    participle: 'torn',
  },
  {
    pl: 'powiedzieć',
    present: 'tell',
    past: 'told',
    participle: 'told',
  },
  {
    pl: 'myśleć',
    present: 'think',
    past: 'thought',
    participle: 'thought',
  },
  {
    pl: 'rzucić',
    present: 'throw',
    past: 'threw',
    participle: 'thrown',
  },
  {
    pl: 'rozumieć',
    present: 'understand',
    past: 'understood',
    participle: 'understood',
  },
  {
    pl: 'ubierać',
    present: 'wear',
    past: 'wore',
    participle: 'worn',
  },
];
const modules = { info, words };
export default modules;
