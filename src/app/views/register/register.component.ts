import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor() {
    this.loadFormGroup();

  }

  ngOnInit(): void {

  }

  loadFormGroup(){
    this.registerForm = new FormGroup( {
      firstName: new FormControl('', [Validators.required]),
      lastName : new FormControl('', [Validators.required]),
      address : new FormControl('', [Validators.required]),
      contactNumber : new  FormControl('', [Validators.required]),
      username : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required]),
      repeatPassword : new FormControl('', [Validators.required])
    });
  }

  onRegister() {
     console.log(this.registerForm);
  }

}
