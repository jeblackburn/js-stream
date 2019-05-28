import { KITTENS, PUPPIES } from '../topics';

let catFeed;
let dogFeed;
let kittensSink;
let puppiesSink;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function publishCatUrl() {
    const width = getRandomInt(100, 1000);
    const height = getRandomInt(100, 1000);
    const catUrl = `https://placekitten.com/${Math.min(width, height)}/${Math.max(width,height)}`;
    kittensSink && kittensSink({ newUrl: catUrl, type: KITTENS });
}

function publishDogUrl() {
    const width = getRandomInt(100, 1200);
    const height = getRandomInt(100, 1200);
    const dogUrl = `http://place-puppy.com/${Math.min(width, width)}x${Math.max(width, height)}`;
    puppiesSink && puppiesSink({newUrl: dogUrl, type: PUPPIES});
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

    setKittensConsumer(kittensConsumer) {
        kittensSink = kittensConsumer;
    },

    setPuppiesConsumer(puppiesConsumer) {
        puppiesSink = puppiesConsumer;
    }
}