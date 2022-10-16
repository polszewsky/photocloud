export const fetchPhotoLocationObject = (location) => {
  switch (location.toLowerCase()) {
    case "helsinki":
      return helsinki;

    default:
      return notfound;
  }
};

const helsinki = {
  id: "helsinki",
  que: "I was NOT prepared for the prices in Findland's capitol. Nor was I prepared for the weather, since the tempretures exceeded 30*C in the shadows. Besides getting sunburn and sun-rash, I had the pleasure to sightsee one of the nordic capitols. Weather you like White Cathedral (St Nicholas's Church), Suomenlinna Fortress or flowers in Botanical Garden be sure to grab OsloPass as well.",
  images: [
    "https://i.imgur.com/8F6B5K0.png",
    "https://i.imgur.com/Vwya5M5.png",
    "https://i.imgur.com/CDRudpF.png",
    "https://i.imgur.com/NJTNu9H.png",
    "https://i.imgur.com/9stH0JF.png",
  ],
};

const notfound = {
  id: "Unknown",
  que: "404 Not Found... Have some kitties instead",
  images: [
    "http://placekitten.com/g/600/300",
    "http://placekitten.com/600/300",
    "http://placekitten.com/g/600/300",
    "http://placekitten.com/600/300",
    "http://placekitten.com/g/600/300",
  ],
};
