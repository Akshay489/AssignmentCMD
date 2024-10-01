import { Component } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 // loginForm: FormGroup;
 username: string = '';
 password: string = '';

  constructor( private router: Router) {
    // this.loginForm = this.fb.group({
    //   username: ['', Validators.required],
    //   password: ['', Validators.required],
    // });
  }

  onSubmit(): void {
    console.log("On submit called", this.username);
    const usernameelmt = document.getElementById('username') as HTMLInputElement;
    this.username = usernameelmt.value;
    const passwordlmt = document.getElementById('password') as HTMLInputElement;
    this.password = passwordlmt.value;
    console.log("On submit called", this.username);
    if(this.username=='username'&&this.password=='test123'){

      this.router.navigate(['/dashboard']);
    }
    else{
      alert("Invalid credentials");
    }
  }
}
