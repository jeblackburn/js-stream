import { KITTENS, PUPPIES } from '../topics';

let catFeed;
let dogFeed;
let messageSink;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function publishCatUrl() {
    const width = getRandomInt(100, 1000);
    const height = getRandomInt(100, 1000);
    let catUrl = `https://placekitten.com/${width}/${height}`;
    messageSink && messageSink({ newUrl: catUrl, type: KITTENS });
}

function publishDogUrl() {
    let dogUrl = `http://place-puppy.com/${getRandomInt(100, 1200)}x${getRandomInt(100, 1200)}`;
    messageSink && messageSink({newUrl: dogUrl, type: PUPPIES});
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

    setConsumer(consumer) {
        messageSink = consumer;
    }
}