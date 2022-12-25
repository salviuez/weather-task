
async function getWeather() {                                                                //introducing function name
    var cityName = document.getElementById('cityName').value                                 //using id name to link html and js page to display output in webpage
    console.log(cityName);                                                                  //display output in console page

    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ed4d85ad548e0b0c63207485f46e05a1`)      //fetching weather api using await
    let result = await data.json()                                                                                                      //getting weather data in json format
    console.log(result)                                                                                                                 //display output in console page

    var weather = document.getElementById('weather')                                                              //used id weather to link html & js page to display output in front webpage
    weather.innerHTML = `<div class="card bg-dark text-primary" style="width:30rem; text-align:center" >
<img class="card-img" src="https://img.freepik.com/free-vector/rainfall-background-with-clouds-droplets_1017-32180.jpg?w=2000" alt="Card image" >
<div class="card-img-overlay" >
  <h5 class="card-title text-lg">Current Weather Report</h5>
  <p class="card-text">Temperature: ${result.main.temp}</p>
  <p class="card-text">Humidity: ${result.main.humidity}</p>
  <p class="card-text">Wind Speed: ${result.wind.speed}</p>
  <p class="card-text text-danger">Last updated 1 mins ago</p>
</div>
</div>`
}