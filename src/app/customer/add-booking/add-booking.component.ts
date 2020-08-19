import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
} from "@angular/forms";
import { Passenger } from "src/app/models/Passenger";
import { ScheduleFlight } from "src/app/models/scheduleFlight";
import { Router, ActivatedRoute } from "@angular/router";
import { CustomerService } from "../customerservice/customer.service";
import { formatDate } from "@angular/common";
import { User } from "src/app/models/User";
import { Flight } from "src/app/models/Flight";
import { Schedule } from "src/app/models/Schedule";

@Component({
  selector: "app-add-booking",
  templateUrl: "./add-booking.component.html",
  styleUrls: ["./add-booking.component.css"],
})
export class AddBookingComponent implements OnInit {

  passenger: Passenger = new Passenger();
  user: User = new User();
  msg: any;
  errorMsg: string;

  scheduleFlightId: number;
  sc: ScheduleFlight[];

  passengerForm: FormGroup = new FormGroup({
    passengerName: new FormControl(""),
    luggage: new FormControl(""),
    seatNumber: new FormControl("")
  });

  id: string;
  
  //form: FormGroup = new FormGroup({});

  constructor(private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute) 
  {
    this.route.params.subscribe((params) => {
      this.scheduleFlightId = params["scheduleflightid"];
      console.log(this.scheduleFlightId);
    });
  }

  ngOnInit() {
    console.log(this.scheduleFlightId);
    this.customerService
      .findScheduleFlightById(this.scheduleFlightId+"")
      .subscribe((data) => this.handler(data));
  }

  // get f() {
  //   return this.form.controls;
  // }
 
  get f() {
    return this.passengerForm.controls;
  }

  handler(data) {
    console.log(data);
    this.sc = data;
    console.log(this.sc);
  }

  // addPassenger() {
  //   this.customerService.addPassenger(this.passenger).subscribe(
  //     (data) => {
  //       console.log("new user added");
  //       this.msg = undefined;
  //       this.msg = data;
  //       this.errorMsg = undefined;
  //       this.passenger = new Passenger();
  //       this.router.navigateByUrl("/login");
  //     },
  //     (error) => {
  //       this.errorMsg = JSON.parse(error.error).message;
  //       console.log(error.error);
  //       this.msg = undefined
  //       this.router.navigateByUrl("customer/pay",)
  //     });
  // }
  addPassenger() {
    // this.customerService.addPassenger(this.passenger).subscribe(
    //   (data) => {
    //     console.log("new user added");
    //     this.msg = undefined;
    //     this.msg = data;
    //     this.errorMsg = undefined;
    //     this.passenger = new Passenger();
    //     this.router.navigateByUrl("/login");
    //   },
    //   (error) => {
    //     this.errorMsg = JSON.parse(error.error).message;
    //     console.log(error.error);
    //     this.msg = undefined
    //     this.router.navigateByUrl("customer/pay",)
    //   });

    this.passenger.passengerName = this.passengerForm.controls.passengerName.value;
    this.passenger.luggage = this.passengerForm.controls.luggage.value;
    this.passenger.seatNumber = this.passengerForm.controls.luggage.value;
    console.log(this.passenger);
  }

  ProceedPayment() {
    console.log("Proceeding to Payment");
    console.log(this.f.modelpassengerName.value);
    //this.router.navigate(["customer/addBooking/", id.BookingId]);
    this.msg = undefined;
    this.router.navigateByUrl("pay/:bookingid");
  }
}
