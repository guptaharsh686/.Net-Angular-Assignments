import { Component, OnInit } from '@angular/core';
import { CityserviceService } from './cityservice.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Autocomplete.UI';

  options : any = ["Sam","Varun","Tom","Harsh"]

  formGroup : FormGroup;

  constructor(private service : CityserviceService,private fb : FormBuilder){
    this.formGroup = this.fb.group({
      'city' : ['']
    });
    this.formGroup.get('city')?.valueChanges.subscribe(response => {
      //console.log(response);
      this.getNames(response)

    });
  }
  ngOnInit(): void {
    //this.getNames();
  }


  getNames(name : string){
    this.service.getData(name).subscribe(
      response => {
        this.options = response;
      }
    )
  }


}
