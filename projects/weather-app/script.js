async function getWeather(){

const city = document.getElementById("cityInput").value;

const apiKey = "dce0023076ba020e5923fc7bcf07ab74";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
try{

const response = await fetch(url);
const data = await response.json();

if(data.cod !== 200){
document.getElementById("weatherResult").innerHTML = "City not found";
return;
}

document.getElementById("weatherResult").innerHTML = `
<h2>${data.name}</h2>
<p>Temperature: ${data.main.temp}°C</p>
<p>Weather: ${data.weather[0].description}</p>
`;

}catch(error){
document.getElementById("weatherResult").innerHTML = "Error fetching weather";
}

}