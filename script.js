var apiKey = '7a295d18aad3388e176aeda43659a275';
//var apiKey = '27c1810b56000ea7afe81f92045aa6ca';


// const userAction = async () => {
//     const response = await fetch('http://example.com/movies.json');
//     const myJson = await response.json(); //extract JSON from the http response
//     // do something with myJson
//   }
function GetWeather() {
    var city = $('#txtCity').val();
    var lat = 0;
    var lon = 0;
    var location = GetLocation(city);
    //console.log(location[0]);
}
function GetLocation(address) {
    var url = 'http://api.openweathermap.org/geo/1.0/direct?q=' + address + '&limit=0&appid=' + apiKey;
    return FetchLocation(url).then(location => {
        var lat =location[0].lat;
        var lon =location[0].lon;
        var url= 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=' + apiKey;
        FetchWeather(url).then(weather=>{
            console.log(weather);
            $('#currentCity').html(weather.weather[0].name);
            // var url2= 'http://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&appid=' + apiKey;
        });
    });
}

async function FetchLocation(url) {
    const response = await fetch(url);
    const myJson = await response.json();
    return myJson;
}
async function FetchWeather(url) {
    const response = await fetch(url);
    const myJson = await response.json();
    console.log(myJson);

}