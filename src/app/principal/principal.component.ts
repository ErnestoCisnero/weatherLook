import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  cityData ={
    cityName: "",
    cityCode: ""
  }

 

  weatherData;
  errorData;


  constructor(private weather:WeatherService) { }

  ngOnInit(): void {
  }


  getweather(){
    this.weather.getWeather(this.cityData.cityName,this.cityData.cityCode)
      .subscribe(
        res =>{ 
              this.errorData=0;  
               this.weatherData=res;
               console.log(res)
               
              },
       
        err =>{
                console.log(err);
                this.errorData=1;
              }
              )
            
        return false
        
  }
}
