import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit 
{
  DetailsForm: any;
  formBuilder: any;

  gender: any = ['Mr', 'Mrs', 'Ms.']

  constructor(public fb: FormBuilder) { }

  genderForm = this.fb.group({
    name: ['']})

  ngOnInit(): void 
  {
    this.DetailsForm = this.formBuilder.group({
      userMail: ['', Validators.required],
      userPassword: ['', Validators.required]
    });
  }
  
  proceedToPayment()
  { 
    alert(JSON.stringify(this.genderForm.value))
  }
}
