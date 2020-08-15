import { Time } from '@angular/common';
import { Airport } from './Airport';

export class Schedule{
    scheduleId:number;
    sourceAirport:Airport;
    destinationAirport:Airport;
    departureTime:Time;
    arrivalTime:Time;
}