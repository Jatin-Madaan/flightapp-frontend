import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RescheduleComponent } from './reschedule/reschedule.component';
import { ScheduleFlightComponent } from './schedule-flight/schedule-flight.component';


const routes: Routes = [
  { path:'',component:DashboardComponent, children: [
    { path: 'reschedule', component:RescheduleComponent },
    { path: 'scheduleFlight', component:ScheduleFlightComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
