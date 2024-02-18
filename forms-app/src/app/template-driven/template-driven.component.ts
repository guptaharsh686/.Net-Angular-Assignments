import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {

  fnameControl : FormControl;
  lnameControl : FormControl;
  emailControl : FormControl;

  constructor(){
    this.fnameControl = new FormControl('Harsh');
    this.lnameControl = new FormControl('Gupta');
    this.emailControl = new FormControl('guptaharsh686@gmail.com');
  }
}
