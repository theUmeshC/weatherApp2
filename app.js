document.addEventListener('DOMContentLoaded',getWeather)
const sessionManager = new SessionManager();
const weatherData = sessionManager.getLocationData();
const weather = new Weather(weatherData.city,weatherData.state);
const ui = new Ui();

document.getElementById('w-change-btn').addEventListener('click',(e)=>{
    const city =document.getElementById('city').value;
    const state =document.getElementById('state').value;
    weather.changeWeather(city,state);
    getWeather();

    $('#lockModal').modal('hide')

})

function getWeather(){
    weather.getWeather().then(
        (weather)=>{
            if(Boolean(weather)){
                ui.setWeather(weather)
            }
            else{
              document.getElementById('error-message').textContent='city or state not found';
              setTimeout(()=>{
                document.getElementById('error-message').textContent=''
              },2500)  
            }
        }
    )
}













