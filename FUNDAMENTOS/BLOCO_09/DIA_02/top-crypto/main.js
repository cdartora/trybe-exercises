const append = (coin) => {
  const li = document.createElement('li');
  const list = document.querySelector('#list-container');

  li.innerText = `${coin.name} (${coin.symbol}: ${coin.price})`;
  list.appendChild(li);
};

const coinsHandler = (coins) => {
  coins.forEach((coin, index) => {
    if (index < 10) {
      const coinData = {
        name: coin.id,
        symbol: coin.symbol,
        price: coin.priceUsd,
      }
      append(coinData);
    }
  });
};

const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  coinsHandler(coins);
}
window.onload = () => fetchCoins();