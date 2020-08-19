import { Time } from '@angular/common';
import { Schedule } from './Schedule';
import { Flight } from './Flight';
import { Passenger } from './Passenger';
import { Timestamp } from 'rxjs';
import { ScheduleFlight } from './scheduleFlight';
import { User } from './User';

export class Booking{
    bookingId:number;
    bookingDate:Date;
    ticketPrice:number;
    flight : Flight;
    noOfPassengers: number;
    status:string;
    bookingStatus:string;
    scheduleFlight:ScheduleFlight;
    passengers:Passenger[];
    user : User;
}