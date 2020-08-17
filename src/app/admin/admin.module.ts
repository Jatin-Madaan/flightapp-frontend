import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlightsComponent } from './flights/flights.component';
import { RescheduleComponent } from './reschedule/reschedule.component';
import { ScheduleFlightComponent } from './schedule-flight/schedule-flight.component';
<<<<<<< HEAD
import { CancelBookingComponent } from './cancel-booking/cancel-booking.component';
=======
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
>>>>>>> 2a835862473a46a6911ed146136caba10f872a73

@NgModule({
  declarations: [DashboardComponent, RescheduleComponent, ScheduleFlightComponent,FlightsComponent, CancelBookingComponent],

  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
