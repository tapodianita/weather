import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class WeatherDataService{
  url = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = '';
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
