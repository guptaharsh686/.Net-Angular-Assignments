import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {

  personFormGroup : FormGroup;

  constructor(private fb : FormBuilder){
    this.personFormGroup = this.fb.group({
      fname : ['aaa'],
      lname : ['bbb'],
      email : ['ccc']
    });
    console.log(this.personFormGroup.value);
  }

  handleSubmission(fvalue : any){
    console.log(fvalue);
    
  }

}
