const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey = "eba61875814330005ccb3de051b1486c";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

const wheatherIcon=document.querySelector(".wheather-icon");


let city =document.querySelector("input").value;

    async function checkweather(city){
        const response = await fetch(apiurl + city + `&appid=${apikey}` );

        if(response.status=="404"){
            document.querySelector(".error").style.display="block";
            document.querySelector(".wheather").style.display="none";
        }else{
            var data = await response.json();

            console.log(data);
    
            
    
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
            document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
            document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
    
                if(data.weather[0].main == "Clouds"){
                    wheatherIcon.src="images/clouds.png";
                }
                else if(data.weather[0].main == "Clear"){
                    wheatherIcon.src="images/clear.png";
                }
                else if(data.weather[0].main == "Rain"){
                    wheatherIcon.src="images/rain.png";
                }
                else if(data.weather[0].main == "Drizzle"){
                    wheatherIcon.src="images/drizzle.png";
                }
                else if(data.weather[0].main == "Mist"){
                    wheatherIcon.src="images/mist.png";
                }
    
                document.querySelector(".wheather").style.display="block";
                document.querySelector(".error").style.display="none";
                
        }
       
}

searchBtn.addEventListener("click", ()=>{
    checkweather(searchBox.value);
})
