const schedule = require('node-schedule');
const axios = require('axios');

const url = 'https://tradeogre.com/api/v1/markets';
const freq = process.env.FREQ || 5;
const key = process.env.COIN || 'BTC-LTC';

console.log(`Fetching ${key} price every ${freq} seconds`)

schedule.scheduleJob(`*/${freq} * * * * *`, async function(){
  try {
            const config = {
                headers: {
                    'Accept': 'application/json'
                },
            };
        const { data } = await axios.get(`${url}`, config);        
        const coin = data.filter(coin => coin.key !== coin[key])[0][key];
        const price = coin.price;
        console.log(price);
  } catch (error) {
            console.error('There was an error fetching data.');
        }
});

