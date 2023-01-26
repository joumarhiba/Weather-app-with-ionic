import { environment } from './../../environments/environment';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const API_URL = environment.API_URL
const API_KEY = environment.API_KEY

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  weatherTemp : any
  todayDate  = new Date()
  cityName : any
  weatherIcon : any
  weatherDetails : any

  constructor(public httpClient: HttpClient) {
    this.loadData()
  }

  loadData() {
    this.httpClient.get(`${API_URL}/weather?lat=${31.63000}&lon=-8.00889&appid=${API_KEY}`).subscribe((result : any) => {
    console.log(result);
    this.cityName = result.name
    this.weatherTemp = result.main
    console.log(this.weatherTemp);
    this.weatherDetails =result.weather[0]
    this.weatherIcon =`http://openweathermap.org/img/wn/${this.weatherDetails.icon}@2x.png`

    })
  }

}
