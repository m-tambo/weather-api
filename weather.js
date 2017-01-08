// introduce global variables
let zipCode = $('#zipInput')

// event listener on enter key
$('.container').keyup(function(e) {
   if (e.originalEvent.code === "Enter") {
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
      url: `api.openweathermap.org/data/2.5/weather?zip=${zipCode.val()},us`
    })
    .done(function(data, textStatus, XHR){
      resolve(data)
      console.log(data)
    })
  })
}
