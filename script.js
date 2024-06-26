
const API_KEY = '249439b3a281cc8f0af4c7be9eae15a9'
const form = document.querySelector('form')
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
const city = document.querySelector("city")
// const API=  'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'

const getweather = async (city) => {

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  const response = await fetch(url);
  const data = await response.json()
  return showWeather(data)

}

const showWeather = (data) => {
  if(data.cod=="404"){
    weather.innerHTML=`<h2>city not found<h2>`
    return;
  }
  
  weather.innerHTML = `
   <div>
  <img id="image" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
   </div>
   <div>
    <h2> ${data.main.temp}  C  </h2>  
    <h4>${data.weather[0].main}</h4>
   </div>    
  `
}

form.addEventListener(
  "submit",
  function (event) {
    getweather(search.value)
    event.preventDefault();

  }


)