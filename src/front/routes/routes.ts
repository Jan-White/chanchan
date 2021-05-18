interface Route {
  path: string,
  label: string
}

//For now boards will be hardcoded in here
//Todo: move them somewhere so they can be changed from CMS during runtime
export const boards = {
  anime: {
    label: 'Anime',
    path: '/anime'
  },
  auto: {
    label: 'Automobiles',
    path: '/autos'
  },
  books: {
    label: 'Books',
    path: '/books'
  },
  business: {
    label: 'Business',
    path: '/business'
  },
  comics: {
    label: 'Comics',
    path: '/comics'
  },
  consoles: {
    label: 'Console games',
    path: '/consoles'
  },
  cooking: {
    label: 'Cooking',
    path: '/cooking'
  },
  crypto: {
    label: 'Crypto currency',
    path: '/crypto'
  },
  cycling: {
    label: 'Cycling',
    path: '/cycling'
  },
  design: {
    label: 'Design',
    path: '/design'
  },
  fandom: {
    label: 'Fandom',
    path: '/fandom'
  },
  gamedev: {
    label: 'Gamedev',
    path: '/gamedev'
  },
  hardware: {
    label: 'Computer hardware',
    path: '/hardware'
  },
  hobbies: {
    label: 'Hobbies',
    path: '/hobbies'
  },
  manga: {
    label: 'Manga',
    path: '/manga'
  },
  musicP: {
    label: 'Music production',
    path: '/music'
  },
  pe: {
    label: 'Physical education',
    path: '/physical'
  },
  programming: {
    label: 'Programming',
    path: '/programming'
  },
  random: {
    label: 'Random',
    path: '/random'
  },
  requests: {
    label: 'Requests',
    path: '/requests'
  },
  socialising: {
    label: 'Socialising',
    path: '/soc'
  },
  software: {
    label: 'Software',
    path: '/soft'
  },
  tech: {
    label: 'Tech general',
    path: '/tech'
  },
  textgames: {
    label: 'Textgames',
    path: '/textgames'
  },
  ttp: {
    label: 'Tabletop games',
    path: '/ttp'
  },
  videogames: {
    label: 'Videogames',
    path: '/videogames'
  },
};


interface Category {
  label: string,
  boards: ReadonlyArray<Route>
}

export const boardTypes: ReadonlyArray<Category> = [
  //remove this later, it's just a crutch to navigate to / for now
  {
    boards: [{label: 'Home.', path: '/'}],
    label: ''
  },
  {
    boards: [
      boards.auto, boards.cycling, boards.books, boards.business,
      boards.comics, boards.crypto
    ],
    label: 'Thematic',
  },
  {
    boards: [
      boards.design, boards.cooking, boards.hobbies, boards.musicP,
      boards.gamedev, boards.tech
    ],
    label: 'Creative'
  },
  {
    boards: [boards.hardware, boards.programming, boards.software],
    label: 'Technology'
  },
  {
    boards: [boards.ttp, boards.videogames, boards.textgames, boards.consoles],
    label: 'Games'
  },
  {
    boards: [boards.random, boards.socialising, boards.requests],
    label: 'Miscellaneous'
  },
];
