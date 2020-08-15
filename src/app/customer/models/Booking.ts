import { Time } from '@angular/common';

export class Booking{
    bookingId:number;
    bookingDate:Date;
    bookingTime:Time;
    ticketPrice:number;
    status:string;
    bookingStatus:string;
}