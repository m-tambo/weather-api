// introduce global variables
let zipCode = $('#zipInput')

// event listener on enter key
$('form').submit(function(e) {
   // if (e.originalEvent.code === "Enter") {
     debugger
      if (zipCode.val().length !== 5) {
         alert ('Please enter valid Zip Code')
      }
      else {
         getWeather()
      }
   }
})

// create an ajax call to open weather map
function getWeather() {
  return new Promise( function( resolve, reject ) {
    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/forecast/weather?zip=${zipCode.val()},us&appid=e4a97fbc7551aadfa69dbb29fd6ea3c8`
    })
    .done(function(data, textStatus, XHR){
      resolve(data)
      console.log(data)
    })
  })
}
