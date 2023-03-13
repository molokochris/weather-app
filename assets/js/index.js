const apiEndpoint = "http://api.openweathermap.org/data/2.5/weather?q=seshego&APPID=3ea1c8d09aeea877d65d2682296ce088";
let locationEl = document.getElementById("location");


fetch(apiEndpoint)
  .then(response => response.json())
  .then(data => {
    let temp = data.main.temp;
    let country = data.sys.country;
    let city = data.name;

    console.log(data)
    console.log(data.sys.country);
    console.log(degree(temp), country, city);
    locationEl.innerHTML = country + ", " + city;
  })
  .catch(error => {
    console.error(error);
  });

function degree(f) {
  let c = (f - 32) / 1.8;
  return Math.floor(c);
}
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("side-menu").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    showSideNav();
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("side-menu").style.width = "0";
    document.body.style.backgroundColor = "white";
  }

  function getLocation() {
    let coordinates = navigator.geolocation.getCurrentPosition((success) => {
      let coords = success.coords;
      console.log(coords.latitude, coords.longitude)
    });

    return coordinates;
  }

  let coords = getLocation();
  console.log(coords)

  // let apiEndpoint2 = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&APPID=3ea1c8d09aeea877d65d2682296ce088`;