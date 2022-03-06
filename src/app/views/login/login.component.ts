import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginDetails} from '../../Models/loginDetails';
import {LoginService} from '../../Services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private loginService: LoginService) {
    this.loadFormGroup();
  }

  ngOnInit(): void {
  }

  loadFormGroup() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onLogin() {
    const loginDetails = new LoginDetails();
    loginDetails.username = this.loginForm.controls.username.value;
    loginDetails.password = this.loginForm.controls.password.value;

    this.loginService.login(loginDetails).subscribe(res => {
      if (res) {
        console.log('User logged in');
      }
    }, error => {
      console.log('Failed to log in');
    });
  }
}
