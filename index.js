$(document).ready(function () {
  var lat;
  var lon;
      $.getJSON("http://ip-api.com/json", function(data2){
        lat=data2.lat;
        lon=data2.lon;
        
                   var api = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=06acf040837675a38c18fc2e223c214b';
    
            $.getJSON(api, function (data) {
                    var fTemp;
                    var cTemp;
                    var kTemp;
                    var tempSwap = true;
                
            //JSON call for Open Weather API
        
                var weatherType= data.weather[0].description;
                kTemp = data.main.temp;
                var windSpeed = data.wind.speed;
                var city = data.name;
        
                
                fTemp = ((kTemp)*(9/5)-459.67).toFixed(1);
                cTemp = (kTemp - 273).toFixed(1);
                
                console.log(city);
                $("#city").html(city);
                $("#weatherType").html(weatherType);
                $("#fTemp").html(fTemp + " &#8457;");
                $("#fTemp").click(function(){
                    
                    if(tempSwap===false){
                        $("#fTemp").html(fTemp + " &#8457;");
                        tempSwap = true;
                    } else {
                         $("#fTemp").html(cTemp + " &#8451");
                         tempSwap = false;
                    }
                });
                
                windSpeed = (2.237*(windSpeed)).toFixed(1);
                $("#windSpeed").html("wind blowing at " + windSpeed + " mph");
              
              if(fTemp > 80) {
                $("body").css("background-image", "url(http://www.hlgjyl888.com/data/wallpapers/204/WDF_2420246.jpg)");
              } else if (fTemp > 70){
                 $("body").css("background-image", "url(https://wallpaperscraft.com/image/sun_light_beams_meadow_glade_summer_day_53997_2560x1440.jpg)");
              }  else if (fTemp > 60){
                $("body").css("background-image", "url(https://johnniesblog.files.wordpress.com/2013/03/field-of-tulips-03-26-2013.jpg)")
              } else if(fTemp > 50) {
                $("body").css("background-image", "url(http://www.hdwallpaperup.com/wp-content/uploads/2015/02/Clouded-spring-day-over-the-flower-field.jpg)");
              }  else if(fTemp > 40) {
                 $("body").css("background-image", "url(http://blogs.missouristate.edu/reallife/files/2015/11/rainy-day.jpg)");        
                }  else if(fTemp > 30) {
                  $("body").css("background-image","url(http://www.wallpapers-web.com/data/out/80/4441827-first-snow-wallpapers.jpg)");
                }  else if(fTemp > 20) {
                  $("body").css("background-image","url(http://www.homesalesbylisa.com/wp-content/uploads/2015/02/iStock_000055044002Large.jpg)");
                } else {
                  $("body").css("background-image","url(http://buzz24-7.com/wp-content/uploads/2016/02/Winter_Snowstorm_in_the_wood_036196_.jpg)");
                }

        

            });
       
});
      });

             
 
