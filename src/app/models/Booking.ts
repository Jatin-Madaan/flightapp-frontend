import { Time } from '@angular/common';
import { Schedule } from './Schedule';
import { Flight } from './Flight';
import { Passenger } from './Passenger';
import { Timestamp } from 'rxjs';
import { ScheduleFlight } from './scheduleFlight';

export class Booking{
    bookingId:number;
    booTime:Time;
    ticketPkingDate:Date;
    bookingrice:number;
    noOfPassengers: number;
    status:string;
    bookingStatus:string;
    scheduleFlight:ScheduleFlight;
    flight:Flight;
    passengers:Passenger[];
}