import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  //api.openweathermap.org/data/2.5/weather?q=London&appid={API key}

  private apiKey:string = "";
   
  constructor(private http:HttpClient) { }

  getWeather(cityName:string, cityCode:string){
   
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${cityCode}&appid=${this.apiKey}&units=metric`);

  }
}
