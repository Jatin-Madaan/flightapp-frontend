import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: UserserviceService) { }
  error: any;
  user: User;
  errorpass: string;
  ngOnInit() {
  }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl,
  });

  onSumit() {
    this.loginService.getUserByUsername(this.loginForm.controls.username.value).subscribe(data => {
      this.user = data;
      if (this.user.password == this.loginForm.controls.password.value) {
        console.log("loggin successfull");
        localStorage.setItem("userId", this.user.userId + "");
        if (this.user.userRole == "Customer") {
          window.location.href = "/customer";
        }
        else {
          window.location.href = "/admin";
        }
      }
      else {
        console.log("loggin Unsuccessful");
        this.errorpass = "Password did not match";
      }
    }, error => {
      this.error = error.error.message;
      console.log(this.error);
    });
  }

}
