// En este último ejercicio, la matríz contiene un conjunto de cadenas que contienen información sobre estaciones de tren en el Norte de Inglaterra. Las cadenas son elementos de datos que contienen el código de estación de tres letras, seguidos de más datos legibles por máquina, seguidos de un punto y coma, seguidos por el nombre de la estación legible por humanos. Por ejemplo:
// MAN675847583748sjt567654;Manchester Piccadilly
// Queremos extraer el código y el nombre de la estación, y juntarlos en una cadena con la siguiente estructura:
// MAN: Manchester Piccadilly

var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield',
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    'SYB4f65hf75f736463;Stalybridge',
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

stations.map((station) =>{
    console.log(station.slice(0,3) + ': ' + station.split(';')[1] );    
});

for(let i = 0; i < stations.length; i++){
    const input = stations[i];
    const threeLetters = input.slice(0,3);
    const stationName = input.split(';')[1];
    console.log(`${threeLetters}: ${stationName}` );
}