import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customerservice/customer.service';
import { Booking } from 'src/app/models/Booking';
import { Flight } from 'src/app/models/Flight';
import { ScheduleFlight } from 'src/app/models/scheduleFlight';
import { User } from 'src/app/models/User';
import { Passenger } from 'src/app/models/Passenger';
import { Airport } from 'src/app/models/Airport';
import { Schedule } from 'src/app/models/Schedule';
//import { jsPDF } from 'jspdf';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  bookingid:any;
  bookingdata:Booking = new Booking();
  paymentcancel:any;
 paymentsuccess:any;
  flight:Flight = new Flight();
  user:User = new User();
  scheduleflight:ScheduleFlight = new ScheduleFlight();
  schedule:Schedule = new Schedule();
  passenger?:Passenger[];
  airportsource:Airport = new Airport();
  airportdestination:Airport = new Airport();
  constructor(private router: Router, private route: ActivatedRoute, private ser: CustomerService) { 
    this.route.params.subscribe(params => {
      this.bookingid=params['bookingid'];
    })
  }

  ngOnInit(): void {

    this.ser.getpaggenger(this.bookingid).subscribe(
      passengerdetails=>{
        return this.pass(passengerdetails);
      }
    );


    this.ser.getbookingdetails(this.bookingid).subscribe(
      data => {
        return this.getbooking(data);
      },
      error=>this.ifbookingnotfound(error));  
  }
  pass(passengerdetails){
    this.passenger = passengerdetails;
    console.log(this.passenger)
  }
  downloadPDF(){
<<<<<<< HEAD
    //const doc = new jsPDF('p')
    //const ta = document.getElementById('content');
    //doc.fromHTML(ta, 15, 15);
   // doc.save('demo.pdf')
=======
 //   const doc = new jsPDF('p')
    const ta = document.getElementById('content');
  //  doc.fromHTML(ta, 15, 15);
  //  doc.save('demo.pdf')
>>>>>>> 2a835862473a46a6911ed146136caba10f872a73
  }

  ifbookingnotfound(error){
    alert(error.error.message)
  }

  getbooking(data) {
    this.bookingdata = data;
    if(data.bookingStatus == "Payment Cancelled"|| data.bookingStatus == "Cancelled"){
      this.paymentcancel = data.bookingStatus;
    }
    if(data.bookingStatus == "Payment Successful" || data.bookingStatus == "Successful"){
      this.paymentsuccess = data.bookingStatus;
    }
    this.flight = data.flight;
    this.scheduleflight = data.scheduleFlight;
    this.schedule = data.scheduleFlight.schedule;
    this.user = data.user;
    this.airportsource = data.scheduleFlight.schedule.sourceAirport;
    this.airportdestination = data.scheduleFlight.schedule.destinationAirport;
    console.log(data);
  }

}
