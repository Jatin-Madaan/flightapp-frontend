import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScheduleFlightComponent } from './schedule-flight/schedule-flight.component';


@NgModule({
  declarations: [DashboardComponent, ScheduleFlightComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
