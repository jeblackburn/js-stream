import { publish } from '../broker/broker';
import topics from '../broker/topics';


let catFeed;
let dogFeed;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function publishCatUrl() {
    const width = getRandomInt(100, 1000);
    const height = getRandomInt(100, 1000);
    let catUrl = `https://placekitten.com/${Math.min(width, height)}/${Math.max(width,height)}`;
    publish(topics.KITTENS, catUrl);
}

function publishDogUrl() {
    let width = getRandomInt(100, 1200);
    let height = getRandomInt(100, 1200);
    let dogUrl = `http://place-puppy.com/${Math.min(width, width)}x${Math.max(width, height)}`;
    publish(topics.PUPPIES, dogUrl);
}

export function startImageFeeds() {
    publishCatUrl();
    catFeed = setInterval(() => {
        publishCatUrl();
    }, 2000);
    publishDogUrl();
    dogFeed = setInterval(() => {
        publishDogUrl();
    }, 2000);

}

export function stopImageFeeds() {
    console.log('Killing image feeds');
    clearInterval(catFeed);
    clearInterval(dogFeed);
}
