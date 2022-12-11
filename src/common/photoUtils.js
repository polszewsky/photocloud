const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;

const min = 40;
const max = 48;

// cloud data array
export const CLOUD_DATA = [
  //north
  { value: "Helsinki", count: getRandomArbitrary(min, max) }, //done
  { value: "Tallinn", count: getRandomArbitrary(min, max) }, //done
  { value: "Oslo", count: getRandomArbitrary(min, max) }, //done
  //france
  { value: "Nantes", count: getRandomArbitrary(min, max) }, //done
  { value: "Paris", count: getRandomArbitrary(min, max) }, //done
  { value: "Montpellier", count: getRandomArbitrary(min, max) }, //done
  { value: "Pont-du-Gard", count: getRandomArbitrary(min, max) }, //done
  { value: "Avinion", count: getRandomArbitrary(min, max) }, //done
  { value: "Normandy", count: getRandomArbitrary(min, max) }, //done
  { value: "Arles", count: getRandomArbitrary(min, max) }, //done
  { value: "Carcassonne", count: getRandomArbitrary(min, max) }, //done
  { value: "Mont-Saint-Michel", count: getRandomArbitrary(min, max) },
  { value: "Aigues-Mortes", count: getRandomArbitrary(min, max) }, //done
  //poland
  { value: "Gdańsk", count: getRandomArbitrary(min, max) }, // done
  { value: "Drifts", count: getRandomArbitrary(min, max) }, //done
  { value: "LMF22", count: getRandomArbitrary(min, max) }, //done
  //{ value: "Strelitz", count: getRandomArbitrary(min, max) }, //done
  { value: "Szczawnica", count: getRandomArbitrary(min, max) }, //done
  //south
  { value: "Warna", count: getRandomArbitrary(min, max) }, //done
  { value: "Akwizgran", count: getRandomArbitrary(min, max) }, //done
];

// location places objects
const notfound = {
  title: "unknown",
  subt: "404",
  que: "Sorry, I don't know this one. Here's a cat.",
  images: ["http://placekitten.com/600/400", "http://placekitten.com/600/400"],
  time: "",
};

const helsinki = {
  title: "helsinki",
  subt: "fi",
  que: "I was NOT prepared for the prices in Finland's capitol. Nor was I prepared for the weather, since the tempretures exceeded 30*C in the shadows. Besides getting sunburn and sun-rash, I had the pleasure to sightsee one of the nordic capitols. Weather you like #333 Cathedral (St Nicholas's Church), Suomenlinna Fortress or flowers in Botanical Garden be sure to grab OsloPass as well.",
  images: [
    "https://i.imgur.com/bWIUxZgl.jpg",
    "https://i.imgur.com/rjvkQUEl.jpg",
    "https://i.imgur.com/hIE30FHl.jpg",
    "https://i.imgur.com/vrBqrS1l.jpg",
    "https://i.imgur.com/wHmUmrul.jpg",
  ],
  time: "July, 2022",
};

const oslo = {
  title: "oslo",
  subt: "nr",
  que: "First time in Norway. Clean, fresh and green city. Food was great and prices high. One of my favourite places. I miss Oslo everyday.",
  images: [
    "https://i.imgur.com/JGmGJvhl.jpg",
    "https://i.imgur.com/db5J02ol.jpg",
    "https://i.imgur.com/Eflb08El.jpg",
    "https://i.imgur.com/SxnHX5Rl.jpg",
    "https://i.imgur.com/SG0Yd0yl.jpg",
  ],
  time: "August, 2019",
};

// const cp2077 = {
//   title: "cp2077",
//   locale: "Cyberpunk 2077",
//   subt: "GAME",
//   que: "Great game with great story. Did 100+ hours. Fully recomended.",
//   images: [
//     "https://i.imgur.com/CDRudpFl.png",
//     "https://i.imgur.com/NJTNu9Hl.png",
//     "https://i.imgur.com/9stH0JFl.png",
//     "https://i.imgur.com/Vwya5M5l.png",
//     "https://i.imgur.com/l9nNcazl.png",
//   ],
//   time: "December, 2020",
// };

const tallinn = {
  title: "tallinn",
  subt: "ee",
  que: "Capitol of Estonia. Amazing architecture with modern additions. The 5G is fast and widely available, and TallinnPass grants you FREE entry for public transport and 30+ museums. Lovely city with great history and warm Baltic sea (I know, I swam).",
  images: [
    "https://i.imgur.com/D59UVL9l.jpg",
    "https://i.imgur.com/QIdaDkil.jpg",
    "https://i.imgur.com/hHdMOnhl.jpg",
    "https://i.imgur.com/XGfyn7xl.jpg",
    "https://i.imgur.com/UAyVecbl.jpg",
  ],
  time: "July, 2022",
};

const lmf22 = {
  title: "lmf22",
  locale: "Light Move Festival '22",
  subt: "pl",
  que: "Lodz's LMF. Pretty blinding lights in darkness and lots of people. After few years it's kinda the same. Shame :c",
  images: [
    "https://i.imgur.com/KJdn1FDl.jpg",
    "https://i.imgur.com/Cicm8FMl.jpg",
    "https://i.imgur.com/AYomVQll.jpg",
    "https://i.imgur.com/q8lvUeQl.jpg",
    "https://i.imgur.com/13HGt4Tl.jpg",
  ],
  time: "August, 2022",
};

const drifts = {
  title: "drifts",
  subt: "pl",
  que: "Drifts during winter with a friend in his red nissan. Cold, windy and rainy. Also loud...",
  images: [
    "https://i.imgur.com/DeoAjZIl.jpg",
    "https://i.imgur.com/5dk9wxdl.jpg",
    "https://i.imgur.com/2Sud5Tql.jpg",
    "https://i.imgur.com/ZD3qpCkl.jpg",
    "https://i.imgur.com/0ma4OQQl.jpg",
  ],
  time: "February, 2022",
};

const gdansk = {
  title: "gdansk",
  locale: "Gdańsk",
  subt: "pl",
  que: "Gdansk during winter. My yearly trip to see thy sea and drink wine. This time with thermal underwear. Black and white edits, but at least the weather was nice.",
  images: [
    "https://i.imgur.com/5daQvRNl.jpg",
    "https://i.imgur.com/3LvLetrl.jpg",
    "https://i.imgur.com/cp5yTX9l.jpg",
    "https://i.imgur.com/Dcvwy4Cl.jpg",
    "https://i.imgur.com/Wj9sLSRl.jpg",
  ],
  time: "February, 2022",
};

// const strelitz = {
//   title: "strelitz",
//   locale: "Strzelce Opolskie",
//   subt: "pl",
//   que: "My GF's home town. Small, but cute place with colorful landscapes around.",
//   images: [
//     "https://i.imgur.com/dt7jWcTl.jpg",
//     "https://i.imgur.com/BY0OqxOl.jpg",
//     "https://i.imgur.com/lijDS05l.jpg",
//     "https://i.imgur.com/NHSzwNSl.jpg",
//     "https://i.imgur.com/tMEkJlHl.jpg",
//   ],
//   time: "August, 2021",
// };

const szczawnica = {
  title: "szczawnica",
  subt: "pl",
  que: "Turistic town located in Pieniny with great hiking trails. Nerby you can find 2 castles with a lake between them. It's also close to Slovenia, so.. Ahoy (Nope, that is CZ).",
  images: [
    "https://i.imgur.com/meymtncl.jpg",
    "https://i.imgur.com/6vCi7Xjl.jpg",
    "https://i.imgur.com/deGuGgpl.jpg",
    "https://i.imgur.com/zkBBT0nl.jpg",
    "https://i.imgur.com/GJKeyQnl.jpg",
  ],
  time: "August, 2021",
};

const warna = {
  title: "warna",
  subt: "br",
  que: "Warna, Obzor and other beauties from Bulgaria. 2005, so I was a little 9-year-old who didn't like to eat and was sulking every minute. On the other hand Bulgaria had like 12 flavours of Fanta back then. Still more than in 2022 Poland.",
  images: [
    "https://i.imgur.com/LfBwfJAl.jpg",
    "https://i.imgur.com/AfP2GiVl.jpg",
    "https://i.imgur.com/vyy3wkRl.jpg",
    "https://i.imgur.com/0BNDdzNl.jpg",
    "https://i.imgur.com/7b7Efzkl.jpg",
  ],
  time: "July, 2005",
};

const akwizgran = {
  title: "akwizgran",
  subt: "gr",
  que: "This city has Aachen Cathedral, where Charles The Great and Otto III are buried. During the WWII, more that half the city was destroyed... I know it is germany, but why do we have to speak german here?",
  images: [
    "https://i.imgur.com/JsPWaB2l.jpg",
    "https://i.imgur.com/lQSNZMxl.jpg",
    "https://i.imgur.com/IeIj6mDl.jpg",
    "https://i.imgur.com/xCUsLp5l.jpg",
    "https://i.imgur.com/ZxawkOql.jpg",
  ],
  time: "June, 2018",
};

const normandy = {
  title: "normandy",
  subt: "fr",
  que: "The sky, the grass, the water. Such a breath-taking view. It's almost impossible to imagine the horrors of the war and how it must've look back then. So calm...",
  images: [
    "https://i.imgur.com/rWAqonJl.jpg",
    "https://i.imgur.com/mHXkAEYl.jpg",
    "https://i.imgur.com/yIXBTREl.jpg",
    "https://i.imgur.com/YJ2LkwXl.jpg",
    "https://i.imgur.com/WRqot57l.jpg",
  ],
  time: "June, 2018",
};

const nantes = {
  title: "nantes",
  locale: "Nantes, Pt. 1",
  subt: "fr",
  que: "Even though I don't speak french, I really loved this place. I could see myself living there and going every morning for a baguette.",
  images: [
    "https://i.imgur.com/6z4K4E6l.jpg",
    "https://i.imgur.com/5Ll9OPll.jpg",
    "https://i.imgur.com/gZfB675l.jpg",
    "https://i.imgur.com/U9N8sT6l.jpg",
    "https://i.imgur.com/LWRnqMal.jpg",
  ],
  time: "June, 2018",
};

const mont_saint_michel = {
  title: "mont-saint-michel",
  locale: "Mont Saint Michel",
  subt: "fr",
  que: "Mont Saint Michel. No to be confused with St Michael's Mount which is located in Marizon, Great Britian. Or Not-So-Great-Now-Innit Britian, now that we've come after the Brexit?",
  images: [
    "https://i.imgur.com/wpGct2ol.jpg",
    "https://i.imgur.com/duu8Xlvl.jpg",
    "https://i.imgur.com/Xs8cFjNl.jpg",
    "https://i.imgur.com/Nj837Ejl.jpg",
    "https://i.imgur.com/e3e7Maxl.jpg",
  ],
  time: "June, 2018",
};

const aigues_mortes = {
  title: "aigues-mortes",
  locale: "Aigues Mortes",
  subt: "fr",
  que: "City +  a square + high walls + lots of stone = Aigues Mortes. It's a strange place with people still living inside. So much history.",
  images: [
    "https://i.imgur.com/sQHxTBdl.jpg",
    "https://i.imgur.com/9nSzcO1l.jpg",
    "https://i.imgur.com/C1WfUZol.jpg",
    "https://i.imgur.com/tS3TwAdl.jpg",
    "https://i.imgur.com/sI0Ddu8l.jpg",
  ],
  time: "June, 2018",
};

const carcassonne = {
  title: "carcassonne",
  subt: "fr",
  que: "Och the Carcassone. Romans build a castle there in the 1st century. Napoleone restored it centuries later... Then the Robid Hood movie filmed there.",
  images: [
    "https://i.imgur.com/j8vTu8gl.jpg",
    "https://i.imgur.com/7YNglNhl.jpg",
    "https://i.imgur.com/lMFjSeZl.jpg",
    "https://i.imgur.com/S8CmwpUl.jpg",
    "https://i.imgur.com/1Ua04Wjl.jpg",
  ],
  time: "June, 2018",
};

const arles = {
  title: "arles",
  subt: "fr",
  que: "The outstanding colloseum and the catacombs are a `must see` city in southern France. Fun fact: Took some pictures with a package of chrisps, but forgot to send 'em for a contest. At least they traveled across the europe.",
  images: [
    "https://i.imgur.com/mcnscjNl.jpg",
    "https://i.imgur.com/ItGmb9Nl.jpg",
    "https://i.imgur.com/o6ZQTbLl.jpg",
    "https://i.imgur.com/0fUxqlFl.jpg",
    "https://i.imgur.com/SazY8p6l.jpg",
  ],
  time: "June, 2015",
};

const pont_du_gard = {
  title: "pont-du-gard",
  locale: "Pont Du Gard",
  subt: "fr",
  que: "Located at Gardon river, the Roman Empire's aqueduct is a massive... landmark. Built in 16BC, it probably remembers Jesus.",
  images: [
    "https://i.imgur.com/BGBiNZkl.jpg",
    "https://i.imgur.com/sbKhUoVl.jpg",
    "https://i.imgur.com/q8uoq3kl.jpg",
    "https://i.imgur.com/mcAM9VQl.jpg",
    "https://i.imgur.com/lX0vCK4l.jpg",
  ],
  time: "June, 2015",
};

const montpellier = {
  title: "montpellier",
  subt: "fr",
  que: "Amazing city with many mysterious places. Great architecture university. My sister used to study there. Wish I could go there again.",
  images: [
    "https://i.imgur.com/SRtxAKBl.jpg",
    "https://i.imgur.com/wRnaJ43l.jpg",
    "https://i.imgur.com/M7SBQHNl.jpg",
    "https://i.imgur.com/l9nfQOhl.jpg",
    "https://i.imgur.com/iMlnJIbl.jpg",
  ],
  time: "June, 2015",
};

const avinion = {
  title: "avinion",
  subt: "fr",
  que: "The Pope's palace and the remainings of the stone bridge. The beauty and the riches they must've had... it's bizzare!",
  images: [
    "https://i.imgur.com/6gLU7oQl.jpg",
    "https://i.imgur.com/3gUWhbOl.jpg",
    "https://i.imgur.com/IEbzAbbl.jpg",
    "https://i.imgur.com/ou7LIJ0l.jpg",
    "https://i.imgur.com/yPESzwFl.jpg",
  ],
  time: "June, 2015",
};

const paris = {
  title: "paris",
  subt: "fr",
  que: "Paris... It speaks for itself. The home of the Exposition Universelle in 1878, Maria Curie and Oscar Wilde. Seen them graves, touched them stones. Didn't see any rats, tho.",
  images: [
    "https://i.imgur.com/xzM7LT1l.jpg",
    "https://i.imgur.com/HInwd3Bl.jpg",
    "https://i.imgur.com/aGYtZEZl.jpg",
    "https://i.imgur.com/mvzXMjrl.jpg",
    "https://i.imgur.com/PnF5h4Pl.jpg",
  ],
  time: "July, 2012",
};

const PLACES = [
  notfound,
  drifts,
  helsinki,
  oslo,
  tallinn,
  gdansk,
  lmf22,
  //cp2077,
  //strelitz,
  szczawnica,
  warna,
  akwizgran,
  normandy,
  nantes,
  mont_saint_michel,
  aigues_mortes,
  carcassonne,
  arles,
  pont_du_gard,
  montpellier,
  avinion,
  paris,
];
/**
 * Function return a location object based on lowercased param.
 *
 * @param {String} loc
 * @returns
 */
export const fetchPhotoLocationObject = (loc) => {
  const locationToLower = loc.toLowerCase();
  const result = PLACES.find((e) => e.title === locationToLower);

  if (result === undefined || result === null) {
    return notfound;
  }

  return result;
};
