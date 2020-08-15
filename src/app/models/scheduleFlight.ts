import { Schedule } from './Schedule';
import { Flight } from './Flight';

export class ScheduleFlight{
    scheduleFlightId:number;
    availableSeats:number;
    status:string;
    ticketCost:number;
    schedule:Schedule;
    flight:Flight;
}