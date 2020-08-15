import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RescheduleComponent } from './reschedule/reschedule.component';


@NgModule({
  declarations: [DashboardComponent, RescheduleComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
