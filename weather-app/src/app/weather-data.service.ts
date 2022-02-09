import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class WeatherDataService{
  url = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = 'c5955e3a4a2a2ba79c575411f9d4387a';
  constructor(private http: HttpClient) {}

  getWeatherData(lat, lon){
    let params = new HttpParams()
      .set('lat',lat)
      .set('lon', lon)
      .set('units', 'metric')
      .set('appid', this.apiKey)

    return this.http.get(this.url, {params});
  }

}
