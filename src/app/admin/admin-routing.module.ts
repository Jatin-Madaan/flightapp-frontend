import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RescheduleComponent } from './reschedule/reschedule.component';


const routes: Routes = [
  { path:'',component:DashboardComponent, children: [
    { path:'reschedule', component:RescheduleComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
