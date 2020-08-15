import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  { path:'',component:HomeComponent, children: [
    {path:'viewBooking',component:ViewBookingComponent},
    {path:'pay',component:PaymentComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
