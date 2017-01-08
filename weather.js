// introduce global variables
let zipCode = $('#zipInput').value


// create an ajax call to open weather map
function getWeather() {
  return new Promise( function( resolve, reject ) {
    $.ajax({
      url: `api.openweathermap.org/data/2.5/weather?zip=${zipCode},us`
    })
    .done(function(data, textStatus, XHR){
      resolve(data)
      console.log(data)
    })
  })
}
