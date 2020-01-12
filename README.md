# Coin price getter

## Installation

After cloning this repo install dependencies running  

$ cd coin-price-getter  
$ npm install  

## Usage

You can specify currency or frequency using ENV variables.  
Note: default settings are LTC market [from TO] and 5 seconds.  

For example, you can get Ethereum price every 3 seconds:  

$ COIN=ETH FREQ=3 node index.js  