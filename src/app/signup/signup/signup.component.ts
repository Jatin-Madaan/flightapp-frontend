import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signupService: UserserviceService) { }

  ngOnInit() {
  }

  user : User = new User();
  except : string = "";

  signupForm = new FormGroup({
    username : new FormControl('', [Validators.required, Validators.pattern("(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$")]),
    password : new FormControl('', [Validators.required]),
    gender : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]),
    phone : new FormControl('', [Validators.required, Validators.pattern("([0-9]{11}$)|(^[7-9][0-9]{9}$)")])
  });

  get f(){
    return this.signupForm.controls;
  }
  onSubmit(){
    this.user.email = this.signupForm.controls.email.value;
    this.user.gender = this.signupForm.controls.gender.value;
    this.user.username = this.signupForm.controls.username.value;
    this.user.phone = this.signupForm.controls.phone.value;
    this.user.password = this.signupForm.controls.password.value;
    this.user.userRole = "Customer";
    this.user.userState = "Active";
    this.signupService.addUser(this.user).subscribe(data => {
      console.log(data);
      localStorage.setItem("userId", data.userId + "");
      window.location.href = "/customer";
    }, error => {
      this.except = error.error.message;
    })
  }

}
