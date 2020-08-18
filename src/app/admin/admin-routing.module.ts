import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlightsComponent } from './flights/flights.component';
import { RescheduleComponent } from './reschedule/reschedule.component';
import { ScheduleFlightComponent } from './schedule-flight/schedule-flight.component';



const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
<<<<<<< HEAD
      { path: 'adminpage', component: DashboardComponent },
      { path: 'flights', component: FlightsComponent },
=======
>>>>>>> b871c4e38af8ce01b9939651b199affc06c3eb9e
      { path: 'reschedule', component: RescheduleComponent },
      { path: 'scheduleFlight', component: ScheduleFlightComponent },
      { path: 'flights', component: FlightsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
