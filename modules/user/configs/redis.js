const redis = require('redis');
const dotenv = require('dotenv');

dotenv.config();

const url = `redis://${process.env.REDIS_HOST}:${+process.env.REDIS_PORT}`
console.log({ redisUrl: url });

const redisClient = redis.createClient({
    url,
});
redisClient.connect();

redisClient.on('connect', function () {
    console.log('Connected to Redis');
});
redisClient.on('error', (err) => {
    console.log('Error occur while redis connection', err);
})

module.exports = { redisClient };