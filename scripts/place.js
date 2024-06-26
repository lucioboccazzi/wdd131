var temperature = 6;

var conditions = "Partly Cloudy";

var windSpeed = 5;

var wind = "5 km/h";



// windchill function

function calculateWindChill(temperature, windSpeed) {

    const A = 13.12;
    const B = 0.6215;
    const C = 11.37;
    const D = 0.3965;

    let windChill = A + B * temperature - C * Math.pow(windSpeed, 0.16) + D * temperature * Math.pow(windSpeed, 0.16);

    return windChill;
}


