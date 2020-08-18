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

  bookings:Booking[];
  flight:Flight;
  passenger:Passenger[];
  checkFlight:boolean=false;
  checkPassenger:boolean=false;
  index:number=0;
  errorMessage:string;
  status:number[]=[];

  constructor(private service:CustomerService,private router:Router) { }

  ngOnInit() {
    if(localStorage.userId!=null){
      this.service.getBookings(localStorage.userId).subscribe(data=>{
        this.bookings=data;
        for(let i=0;i<this.bookings.length;i++){
          if(this.bookings[i].status=="Booked"){
            this.status[i]=1;
          }
          else{
            this.status[i]=0;
          }
        }
        console.log(this.bookings);
      },err=>{
        console.log(err);
      });
    }
    else{
     this.router.navigate(['/login']);
    }
    
  }

  viewFlight(index:number){
    this.checkFlight=true;
    this.flight=this.bookings[index].flight;
  }

  viewPassenger(index:number){
    this.checkPassenger=true;
    this.passenger=this.bookings[index].passengers;
  }

  setIndex(index:number){
    this.index=index;
  }

  cancelBooking(){
    this.service.cancelBooking(this.bookings[this.index].bookingId).subscribe(data=>{
      this.bookings[this.index]=data;
      $('#cancelModal').modal('hide');
      alert('Booking Cancelled..!!');
    },err=>{
      $('#cancelModal').modal('hide');
      this.errorMessage=err.error;
      alert(this.errorMessage);
    });
  }
}