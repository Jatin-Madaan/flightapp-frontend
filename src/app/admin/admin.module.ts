import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlightsComponent } from './flights/flights.component';
import { RescheduleComponent } from './reschedule/reschedule.component';
import { ScheduleFlightComponent } from './schedule-flight/schedule-flight.component';

@NgModule({
  declarations: [DashboardComponent, RescheduleComponent, ScheduleFlightComponent,FlightsComponent],

  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
