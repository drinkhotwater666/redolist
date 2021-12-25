
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(private http: HttpClient) { }
  API_KEY = '18231b91967118d674b4b86715375a5d';

  getWeather() {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=Adelaide&appid=${this.API_KEY}`);
  }
}
