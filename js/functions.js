const apiKey = "a6f32bde3f59e9141bdb7731fc1a34e4d25b233e3659b96c0672dafde951763b";

const cryptoCurrencies = [
    'BTC',
    'LTC',
    'ETH'
];
const monetaryValues = [
    'EUR'
];

const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrencies.join(',')}&tsyms=${monetaryValues.join(',')}&api_key=${apiKey}`;


$(document).ready(function(){


    const data = getData(url);
    data.then(function(data) {
        console.log(data);
    });
    data.then(displayData);

});


function getData(url){
    return fetch(url)
        .then(function(response) {
            return response.json();
        })
}
function displayData(data) {

}


