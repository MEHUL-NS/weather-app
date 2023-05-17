const apikey = "02aed78890e6ac3007c8f3fb977b464f";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBtn = document.querySelector("#search");
const weathericon = document.querySelector(".weather-img")


document.getElementById('search').addEventListener('click' ,()=>{
    checkWeather(document.getElementById('input').value)
})
document.getElementById('input').addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.querySelector(".search button").click();
    }
  }
    );

document.getElementById('input').addEventListener('keydown' , (event) => {
    if(event.keycode === 13){
        event.preventDefault();
        checkWeather(document.getElementById('input').value)
    }
})

async function checkWeather(city){

    const response = await fetch(apiurl+ city + `&appid=${apikey}`)
    console.log(apiurl + city + `&appid=${apikey}`)

    let data = await response.json();


    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/hr";

    if(data.weather[0].main == "Clouds"){
        weathericon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){        
        weathericon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src = "images/mist.png";
    }
    else if(data.weather[0].main == "Snow"){
        weathericon.src = "images/snow.png";
    }
    
}

