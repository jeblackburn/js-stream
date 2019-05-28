import {dispatchKittensUrl, dispatchPuppiesUrl} from '../actionCreators/actions';

let catFeed;
let dogFeed;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function publishCatUrl() {
  const width = getRandomInt(100, 1000);
  const height = getRandomInt(100, 1000);
  let catUrl = `https://placekitten.com/${width}/${height}`;
  dispatchKittensUrl(catUrl);
}

function publishDogUrl() {
  let dogUrl = `http://place-puppy.com/${getRandomInt(100, 1200)}x${getRandomInt(100, 1200)}`;
  dispatchPuppiesUrl(dogUrl);
}

export const ImageService = {
  startImageFeeds() {
    if (catFeed || dogFeed) return;
    publishCatUrl();
    catFeed = setInterval(() => {
      publishCatUrl();
    }, 2000);
    publishDogUrl();
    dogFeed = setInterval(() => {
      publishDogUrl();
    }, 2000);
  },

  stopImageFeeds() {
    console.log('Killing image feeds');
    clearInterval(catFeed);
    clearInterval(dogFeed);
    catFeed = null;
    dogFeed = null;
  },
};