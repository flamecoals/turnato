import { red, blue, green, orange, yellow } from '@material-ui/core/colors';

export const MAX_WORDS_IN_GAME = 20;
export const MAX_WORD_LEN = 12;
export const DRAW_AFTER_N_TIMERS = 2;
export const TIME_OUT = 20;
export const TIME_BUFF = 1;

export const BOARD_SIZE = 500;
export const SOLUTION_COLOR = yellow[800];

export const playerColors = {
  '0': red[500],
  '1': blue[500],
  '2': green[700],
  '3': orange[700],
};

export const validOrientations = [
  'horizontal',
  'diagonal',
  'diagonalUp',
  'vertical',
  'verticalUp',
  'diagonalBack',
  'horizontalBack',
  'diagonalUpBack',
];

export const globalWordList = [
  'hollywood',
  'well',
  'foot',
  'newyork',
  'spring',
  'court',
  'tube',
  'point',
  'tablet',
  'slip',
  'date',
  'drill',
  'lemon',
  'bell',
  'screen',
  'fair',
  'torch',
  'state',
  'match',
  'iron',
  'block',
  'france',
  'australia',
  'limousine',
  'stream',
  'glove',
  'nurse',
  'leprechaun',
  'play',
  'tooth',
  'arm',
  'bermuda',
  'diamond',
  'whale',
  'comic',
  'mammoth',
  'green',
  'pass',
  'missile',
  'paste',
  'drop',
  'phoenix',
  'marble',
  'staff',
  'figure',
  'park',
  'centaur',
  'shadow',
  'fish',
  'cotton',
  'egypt',
  'theater',
  'scale',
  'fall',
  'track',
  'force',
  'dinosaur',
  'bill',
  'mine',
  'turkey',
  'march',
  'contract',
  'bridge',
  'robin',
  'line',
  'plate',
  'band',
  'fire',
  'bank',
  'boom',
  'cat',
  'shot',
  'suit',
  'chocolate',
  'roulette',
  'mercury',
  'moon',
  'net',
  'lawyer',
  'satellite',
  'angel',
  'spider',
  'germany',
  'fork',
  'pitch',
  'king',
  'crane',
  'trip',
  'dog',
  'conductor',
  'part',
  'bugle',
  'witch',
  'ketchup',
  'press',
  'spine',
  'worm',
  'alps',
  'bond',
  'pan',
  'beijing',
  'racket',
  'cross',
  'seal',
  'aztec',
  'maple',
  'parachute',
  'hotel',
  'berry',
  'soldier',
  'ray',
  'post',
  'greece',
  'square',
  'mass',
  'bat',
  'wave',
  'car',
  'smuggler',
  'england',
  'crash',
  'tail',
  'card',
  'horn',
  'capital',
  'fence',
  'deck',
  'buffalo',
  'microscope',
  'jet',
  'duck',
  'ring',
  'train',
  'field',
  'gold',
  'tick',
  'check',
  'queen',
  'strike',
  'kangaroo',
  'spike',
  'scientist',
  'engine',
  'shakespeare',
  'wind',
  'kid',
  'embassy',
  'robot',
  'note',
  'ground',
  'draft',
  'ham',
  'war',
  'mouse',
  'center',
  'chick',
  'china',
  'bolt',
  'spot',
  'piano',
  'pupil',
  'plot',
  'lion',
  'police',
  'head',
  'litter',
  'concert',
  'mug',
  'vacuum',
  'atlantis',
  'straw',
  'switch',
  'skyscraper',
  'laser',
  'africa',
  'plastic',
  'dwarf',
  'lap',
  'life',
  'honey',
  'horseshoe',
  'unicorn',
  'spy',
  'pants',
  'wall',
  'paper',
  'sound',
  'ice',
  'tag',
  'web',
  'fan',
  'orange',
  'temple',
  'canada',
  'scorpion',
  'undertaker',
  'mail',
  'europe',
  'soul',
  'apple',
  'pole',
  'tap',
  'mouth',
  'ambulance',
  'dress',
  'icecream',
  'rabbit',
  'buck',
  'agent',
  'sock',
  'nut',
  'boot',
  'ghost',
  'oil',
  'superhero',
  'code',
  'kiwi',
  'hospital',
  'saturn',
  'film',
  'button',
  'snowman',
  'helicopter',
  'log',
  'princess',
  'time',
  'cook',
  'revolution',
  'shoe',
  'mole',
  'spell',
  'grass',
  'washer',
  'game',
  'beat',
  'hole',
  'horse',
  'pirate',
  'link',
  'dance',
  'fly',
  'pit',
  'server',
  'school',
  'lock',
  'brush',
  'pool',
  'star',
  'jam',
  'organ',
  'berlin',
  'face',
  'luck',
  'amazon',
  'cast',
  'gas',
  'club',
  'sink',
  'water',
  'chair',
  'shark',
  'jupiter',
  'copper',
  'jack',
  'platypus',
  'stick',
  'olive',
  'grace',
  'bear',
  'glass',
  'row',
  'pistol',
  'london',
  'rock',
  'van',
  'vet',
  'beach',
  'charge',
  'port',
  'disease',
  'palm',
  'moscow',
  'pin',
  'washington',
  'pyramid',
  'opera',
  'casino',
  'pilot',
  'string',
  'night',
  'chest',
  'yard',
  'teacher',
  'pumpkin',
  'thief',
  'bark',
  'bug',
  'mint',
  'cycle',
  'telescope',
  'calf',
  'air',
  'box',
  'mount',
  'thumb',
  'antarctica',
  'trunk',
  'snow',
  'penguin',
  'root',
  'bar',
  'file',
  'hawk',
  'battery',
  'compound',
  'slug',
  'octopus',
  'whip',
  'america',
  'ivory',
  'pound',
  'sub',
  'cliff',
  'lab',
  'eagle',
  'genius',
  'ship',
  'dice',
  'hood',
  'heart',
  'novel',
  'pipe',
  'himalayas',
  'crown',
  'round',
  'india',
  'needle',
  'shop',
  'watch',
  'lead',
  'tie',
  'table',
  'cell',
  'cover',
  'czech',
  'back',
  'bomb',
  'ruler',
  'forest',
  'bottle',
  'space',
  'hook',
  'doctor',
  'ball',
  'bow',
  'degree',
  'rome',
  'plane',
  'giant',
  'nail',
  'dragon',
  'stadium',
  'flute',
  'carrot',
  'wake',
  'fighter',
  'model',
  'tokyo',
  'eye',
  'mexico',
  'hand',
  'swing',
  'key',
  'alien',
  'tower',
  'poison',
  'cricket',
  'cold',
  'knife',
  'church',
  'board',
  'cloak',
  'ninja',
  'olympus',
  'belt',
  'light',
  'death',
  'stock',
  'millionaire',
  'day',
  'knight',
  'pie',
  'bed',
  'circle',
  'rose',
  'change',
  'cap',
  'triangle',
].map((word: string)=>(word.toUpperCase()));
