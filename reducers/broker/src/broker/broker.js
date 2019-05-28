
const subscriptions = {};

export function subscribe(topic, callback) {
    const currentSubscribers = subscriptions[topic];
    if (currentSubscribers) {
        currentSubscribers.push(callback);
    } else {
        subscriptions[topic] = [callback];
    }
}

export function unsubscribe(topic, callback) {
    subscriptions[topic] = subscriptions[topic].filter((item) => item !== callback);
}

export function publish(topic, payload) {
    const topicSubscribers = subscriptions[topic];
    topicSubscribers && topicSubscribers.forEach(callback => {
        callback(payload);
    });
}
