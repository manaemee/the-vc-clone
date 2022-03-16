const BASE_URL = `https://api.coingecko.com/api/v3/coins/`;
export  function fetchCoins(){
return fetch(`${BASE_URL}/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
.then((response)=> response.json());
}