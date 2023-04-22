var apiKey= '7a295d18aad3388e176aeda43659a275';


// const userAction = async () => {
//     const response = await fetch('http://example.com/movies.json');
//     const myJson = await response.json(); //extract JSON from the http response
//     // do something with myJson
//   }
function GetWeather(){
    var city=$('#txtCity').val();
    var lat=0;
    var lon=0;
    var location =GetLocation(city);
    var url= 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=' + apiKey;
}
  function GetLocation(address){
    var url= 'http://api.openweathermap.org/geo/1.0/direct?q=' +address + '&limit=0&appid=' + apiKey;
    Fetchlocation(url).then(location =>{
        return location;
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
        console.log (myJson);

    }