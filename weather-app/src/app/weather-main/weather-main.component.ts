import {Component, OnInit, Pipe} from '@angular/core';
import {WeatherDataService} from "../weather-data.service";

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.scss']
})

export class WeatherMainComponent implements OnInit {
  lat;
  lon;
  weather;

  constructor(private weatherDataService: WeatherDataService) { }

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation(){
    if("geolocation" in navigator){
      navigator.geolocation.watchPosition((success)=>{
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;

        this.weatherDataService.getWeatherData(this.lat, this.lon).subscribe(data=>{
          this.weather = data;
        })
      })
    }
}

}
