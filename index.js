
function getData(){
    const city=search.value;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '91679ca0fdmshfc98a8c9d720f4dp1e7289jsn2b7ec1cdd41f',
		    'x-rapidapi-host': 'weather-api-by-any-city.p.rapidapi.com'
          
        }
    };
        fetch('https://weather-api-by-any-city.p.rapidapi.com/weather/'+city, options)
        .then(response =>response.json())
        .then(res=>{
            temp.innerHTML=res.temp_c;
            ws.innerHTML=res.wind_kph;
            hm.innerHTML=res.humidity;
        })
        .catch(err =>console.error(err));
}

/*function getData(){
    const city=search.value;
    const options = {
        method: 'GET',
        headers: {
           'x-rapidapi-key': '91679ca0fdmshfc98a8c9d720f4dp1e7289jsn2b7ec1cdd41f',
		'x-rapidapi-host': 'the-weather-api.p.rapidapi.com'
        }
    };
    fetch('https://the-weather-api.p.rapidapi.com/api/weather/'+city, options)
    .then(response =>response.json())
    .then(res=>{
        temp.innerHTML=res.data.temp;
        ws.innerHTML=res.data.wind;
        hm.innerHTML=res.data.humidity;
    })
    .catch(err =>console.error(err));
}
*/
/*
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '91679ca0fdmshfc98a8c9d720f4dp1e7289jsn2b7ec1cdd41f',
		'x-rapidapi-host': 'the-weather-api.p.rapidapi.com'
	}
};
async function getData(){
    try {
        const city=search.value;
        const response = await fetch('https://the-weather-api.p.rapidapi.com/api/weather/'+city, options);
        const result = await response.text();
            temp.innerHTML=result.data.temp;
            ws.innerHTML=result.data.wind;
            hm.innerHTML=result.data.humidity;
    } catch (error) {
        console.error(error);
    }
}
*/