import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityserviceService {

  constructor(private http : HttpClient) { }


  getData(cityName : string){
    return this.http.get('https://localhost:44337/api/cities?cityName=' + cityName);
  }
}
