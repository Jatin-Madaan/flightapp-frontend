import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Passenger } from 'src/app/models/Passenger';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit 
{
  DetailsForm: any;
  formBuilder: any;

  passenger: Passenger = new Passenger();
  gender: any = ['Mr', 'Mrs', 'Ms.']

  constructor(public fb: FormBuilder) { }

  genderForm = this.fb.group({
    name: ['']})

  ngOnInit(): void 
  {
    
  }
  
  proceedToPayment()
  { 
    alert(JSON.stringify(this.genderForm.value))
  }
}
