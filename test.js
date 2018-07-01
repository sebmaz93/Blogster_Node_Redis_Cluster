const redis = require('redis');
const redisUrl = 'redis://127.0.0.1:6379';
const client = redis.createClient(redisUrl);

const redisValues = {
	spanish: {
		red: 'rojo',
		orange: 'naranja'
	},
	german: {
		red: 'rot',
		orange: 'orange'
	}
};

client.hset('german', 'red', 'rot');

client.hget('german', 'red', console.log);

// if passing object we need to use stringify
client.set('colors', JSON.stringify({ red: 'rojo' }));

client.get('colors', (err, val) => console.log(JSON.parse(val)));
