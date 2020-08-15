import { Time } from '@angular/common';
import { Schedule } from './Schedule';

export class Booking{
    bookingId:number;
    bookingDate:Date;
    bookingTime:Time;
    ticketPrice:number;
    status:string;
    bookingStatus:string;
    schedule:Schedule;
}