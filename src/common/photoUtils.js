const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;

// cloud data array
export const CLOUD_DATA = [
  { value: "Helsinki", count: getRandomArbitrary(12, 35), color: "#333" },
  { value: "Tallinn", count: getRandomArbitrary(12, 35), color: "#333" },
  { value: "Oslo", count: getRandomArbitrary(12, 35), color: "#333" },
  { value: "Nantes", count: getRandomArbitrary(12, 35), color: "#333" },
  { value: "Paris", count: getRandomArbitrary(12, 35), color: "#333" },
  { value: "Montpelliere", count: getRandomArbitrary(12, 35), color: "#333" },
  { value: "Normandy", count: getRandomArbitrary(12, 35), color: "#333" },
  { value: "Gdańsk", count: getRandomArbitrary(12, 35), color: "#333" },
  { value: "Karkonosze", count: getRandomArbitrary(12, 35), color: "#333" },
  { value: "Łódź", count: getRandomArbitrary(12, 35), color: "#333" },
  { value: "Greece", count: getRandomArbitrary(12, 35), color: "#333" },
  { value: "Obzor", count: getRandomArbitrary(12, 35), color: "#333" },
  { value: "Warna", count: getRandomArbitrary(12, 35), color: "#333" },
  { value: "Turcja", count: getRandomArbitrary(12, 35), color: "#333" },
  { value: "Tunezja", count: getRandomArbitrary(12, 35), color: "#333" },
  { value: "Słowacja", count: getRandomArbitrary(12, 35), color: "#333" },
  { value: "Czechy", count: getRandomArbitrary(12, 35), color: "#333" },
  { value: "Ardspach", count: getRandomArbitrary(12, 35), color: "#333" },
  { value: "Germany", count: getRandomArbitrary(12, 35), color: "#333" },
  { value: "Saxonia", count: getRandomArbitrary(12, 35), color: "#333" },
  { value: "Madrit", count: getRandomArbitrary(12, 35), color: "#333" },
  { value: "Spain", count: getRandomArbitrary(12, 35), color: "#333" },
  { value: "Cyberpunk2077", count: getRandomArbitrary(12, 35), color: "#333" },
  { value: "DaysGone", count: getRandomArbitrary(12, 35), color: "#333" },
  { value: "Gdynia", count: getRandomArbitrary(12, 35), color: "#333" },
];

// location places objects
const helsinki = {
  title: "helsinki",
  subt: "fi",
  que: "I was NOT prepared for the prices in Finland's capitol. Nor was I prepared for the weather, since the tempretures exceeded 30*C in the shadows. Besides getting sunburn and sun-rash, I had the pleasure to sightsee one of the nordic capitols. Weather you like #333 Cathedral (St Nicholas's Church), Suomenlinna Fortress or flowers in Botanical Garden be sure to grab OsloPass as well. Or... visit HIM's frontman father Mr. Vallo in his sex shop.",
  images: [
    "https://i.imgur.com/8F6B5K0.png",
    "https://i.imgur.com/Vwya5M5.png",
    "https://i.imgur.com/CDRudpF.png",
    "https://i.imgur.com/NJTNu9H.png",
    "https://i.imgur.com/9stH0JF.png",
  ],
  time: "July, 2022",
};

const notfound = {
  title: "unknown",
  subt: "404",
  que: "Have some kitties instead",
  images: [
    "http://placekitten.com/1000/600",
    "http://placekitten.com/900/500",
    "http://placekitten.com/900/600",
    "http://placekitten.com/900/550",
    "http://placekitten.com/960/550",
  ],
  time: "",
};

const PLACES = [helsinki, notfound];
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
