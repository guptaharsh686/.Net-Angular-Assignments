import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {

  personFormGroup : FormGroup;

  constructor(){
    this.personFormGroup = new FormGroup({
      fname : new FormControl('aaa'),
      lname : new FormControl('bbb'),
      email : new FormControl('ccc')
    });
  }

}
