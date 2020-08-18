import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Passenger } from 'src/app/models/Passenger';
import { ScheduleFlight } from 'src/app/models/scheduleFlight';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customerservice/customer.service';
import { formatDate } from '@angular/common';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit 
{
 
  passenger: Passenger = new Passenger();
  user: User = new User();
  msg: string;
  errorMsg: string;

  form: FormGroup = new FormGroup({
    luggageForm: new FormControl(''),
    seatForm: new FormControl('')
  });

  constructor(private customerService: CustomerService, private router: Router) { }
  
  ngOnInit(): void { }

  get f() { return this.form.controls; }

  addPassenger() 
  {
    this
      .customerService
      .addPassenger(this.passenger)
      .subscribe((data) => {
        console.log("Add Passenger");
        this.msg = data;
        this.errorMsg = undefined;
        this.passenger = new Passenger()
        this.router.navigateByUrl("/login")
      },
      error => 
      {
        this.errorMsg = JSON.parse(error.error).message;
        console.log(error.error);
        this.msg = undefined
        this.router.navigateByUrl("customer/pay",)
      });    
  }

  ProceedPayment(id:{BookingId:number}) 
  {
    console.log("Proceeding to Payment");
    this.router.navigate(["customer/addBooking/", id.BookingId]);
  }

}
