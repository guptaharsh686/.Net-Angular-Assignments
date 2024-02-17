import { Component, OnInit } from '@angular/core';
import { CityserviceService } from './cityservice.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Autocomplete.UI';

  options : any = ["Sam","Varun","Tom","Harsh"]

  constructor(private service : CityserviceService,private fb : FormBuilder){

  }
  ngOnInit(): void {
    this.getNames();
  }

  getNames(){
    this.service.getData('j').subscribe(
      response => {
        this.options = response;
      }
    )
  }


}
