import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { PaymentComponent } from './payment/payment.component';
import { InvoiceComponent } from './invoice/invoice.component';


const routes: Routes = [
  { path:'',component:HomeComponent, children: [
    {path:'viewBooking',component:ViewBookingComponent},
    {path:'pay/:bookingid',component:PaymentComponent},
    {path:'invoice/:bookingid',component:InvoiceComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
