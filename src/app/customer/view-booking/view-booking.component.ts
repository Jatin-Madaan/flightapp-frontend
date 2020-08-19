import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customerservice/customer.service';
import {Booking} from '../../models/Booking';
import { Flight } from 'src/app/models/Flight';
import { Passenger } from 'src/app/models/Passenger';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {

  bookings:Booking[];            //to store list of booking from the database
  flight:Flight;                //to store flight details of a booking
  passenger:Passenger[];        //to store passenger list in a booking
  checkFlight:boolean=false;    //to check if flight object exists..to handle the interpolation
  checkPassenger:boolean=false; //to check if passenger object exists..to handle the interpolation
  index:number=0;             //to store index of a booking
  errorMessage:string;        //to store error messages from backend
  status:number[]=[];         //to show booking status in different colors

  //injecting service layer and routing
  constructor(private service:CustomerService,private router:Router) { }

  ngOnInit() {
    //checking if a user is logged in
    if(localStorage.userId!=null){
      //subscribing from service to get list of booking from the database
      this.service.getBookings(localStorage.userId).subscribe(data=>{
        this.bookings=data;             //getting list of bookings
        
        //setting the status array to show the colors
        for(let i=0;i<this.bookings.length;i++){
          if(this.bookings[i].status=="Booked"){
            this.status[i]=1;
          }
          else{
            this.status[i]=0;
          }
        }
      },err=>{
        //getting error message and alerting it
        this.errorMessage=err.error;
        alert(this.errorMessage);
      });
    }
    else{
      //if user is not logged in
     this.router.navigate(['/login']);
    }
    
  }

  //method to view flight details
  viewFlight(index:number){
    this.checkFlight=true;
    this.flight=this.bookings[index].flight;
  }

  //method to view passenger details
  viewPassenger(index:number){
    this.checkPassenger=true;
    this.passenger=this.bookings[index].passengers;
  }

  //setting the index of booking object to view further details and for cancelling
  setIndex(index:number){
    this.index=index;
  }

  //cancel ticket method
  cancelBooking(){
    //getting the booking object after a booking is cancelled
    this.service.cancelBooking(this.bookings[this.index].bookingId).subscribe(data=>{
      this.bookings[this.index]=data;               //new booking object after cancelling
      $('#cancelModal').modal('hide');              //hiding the modal and success alert
      alert('Booking Cancelled..!!');
    },err=>{
      $('#cancelModal').modal('hide');              //hiding the modal and error alert
      this.errorMessage=err.error;
      alert(this.errorMessage);
    });
  }
}