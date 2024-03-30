/*async function getdata(){
    const api=fetch
}*/

const key = "12da34db2ba25c736041f4ce1146a1fe";

async function searchWeather() {
    let villeInput = document.getElementById("search").value.trim();

    if (villeInput !== '') {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${villeInput}&limit=5&appid=${key}`);
        const data = await response.json();
        



        if (data.length > 0) {
            const { lat, lon } = data[0];

            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
            const weatherResponse = await fetch(weatherUrl);
            const weatherData = await weatherResponse.json();
    
            displayWeather(weatherData);
            const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${key}`);
            const datahe = await res.json();
            dataheurs(datahe)
            
           


        } else {
            alert('City not found.');
        }
    } else {
        alert('Please enter a city name.');
    }
}


function dataheurs(heurs) {
    for (let i = 0; i < 6; i++) {
        const heur = heurs.list[i].main.temp + "°";
        document.getElementById('degree' + (i + 1)).innerText = heur;
    }
}


function displayWeather(data) {

    const windSpeed = data.wind.speed + 'km/h';
    document.getElementById('windSpeed').innerText = windSpeed;

    const Names =data.name ;
    document.getElementById('city').innerText = Names ;

    const humidityValue = data.main.humidity + '%';
    document.getElementById('humidityValue').innerText = humidityValue;

    const temperatureCelsius = (data.main.temp - 273.15).toFixed(1)+ '°C';
    document.getElementById('num').innerText = temperatureCelsius ;


 

}



