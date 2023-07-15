const apiKeyLocation = '40de077ad1cf4699a7f8ed7fc1009550';
const apiKeyWeather = "9e3dd4de320143398fe191742232302";
let countryLocation = "None";

var ipAddress = '';

      const ipData = async () => {
        let server = "https://api.ipify.org?format=json";
        let data = await fetch(server);
        var readyData = await data.json();

        ipAddress = readyData.ip
      }

      ipData()

  const locationByIp = async () => {
    let servers = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKeyLocation}&ip=${ipAddress}`;
    let data = await fetch(servers);
    var readyData = await data.json();

    countryLocation = readyData.country_capital


    const weather = async () => {
      let apiServers = `http://api.weatherapi.com/v1/current.json?key=${apiKeyWeather}&q=` + countryLocation + "&aqi=no";
      let data = await fetch(apiServers);
    
      readyData = await data.json();
      var deg = document.querySelector('.deg');
      var humidity = document.querySelector('.humidity');
      var date = document.querySelector('.date');
      var citie = document.querySelector('.cities');
      var desc = document.querySelector('.desc');
      var icon = document.querySelector('.data1 img');

      deg.textContent = readyData.current.temp_c + " C";
      icon.src = readyData.current.condition.icon;
      humidity.textContent = readyData.current.humidity;
      date.textContent = readyData.location.localtime;
      citie.textContent = readyData.location.country;
      desc.textContent = readyData.current.condition.text;
    
    };
    weather()
    const newLocation = document.getElementById("locationInput");
    newLocation.addEventListener("keypress", function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        countryLocation = newLocation.value;
        weather();
        newLocation.value = ""
      }
    });
  }

  locationByIp()

