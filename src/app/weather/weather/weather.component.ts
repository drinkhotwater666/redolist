import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service'



@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
  city: string = ''
  humidity: string = ''
  weather: string = ''
  speed: string = ''
  deg: string = ''
  temp!: number
  feels_like!: number
  country: string = ''
  constructor(private api: WeatherService) { }

  ngOnInit(): void {
    this.api.getWeather().subscribe((data: any) => {
      console.log(data);
      this.country = data.sys.country
      this.city = data.name
      this.humidity = data.main.humidity
      this.weather = data.weather[0].description
      this.speed = data.wind.speed
      this.deg = data.wind.deg
      this.temp = Math.round(data.main.temp - 273.15)
      this.feels_like = Math.round(data.main.feels_like - 273.15)
    });
  }
}
