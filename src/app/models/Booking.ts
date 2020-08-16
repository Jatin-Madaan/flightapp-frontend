import { Time } from '@angular/common';
import { Schedule } from './Schedule';
import { Flight } from './Flight';
import { Passenger } from './Passenger';

export class Booking{
    bookingId:number;
    bookingDate:Date;
    bookingTime:Time;
    ticketPrice:number;
    status:string;
    bookingStatus:string;
    schedule:Schedule;
    flight:Flight;
    passengers:Passenger[];
}