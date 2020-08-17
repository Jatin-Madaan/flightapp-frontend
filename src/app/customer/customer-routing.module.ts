import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { PaymentComponent } from './payment/payment.component';
import { InvoiceComponent } from './invoice/invoice.component';

import { ModifyBookingComponent } from './modify-booking/modify-booking.component';
<<<<<<< HEAD
import { AddBookingComponent } from './add-booking/add-booking.component';



const routes: Routes = 
[
  {path:'',component:HomeComponent, children:
  [ 
    { path: 'addBooking',component:AddBookingComponent},
  
    { path: 'viewBooking',component:ViewBookingComponent},
    { path: 'modifyBooking',component:ModifyBookingComponent},
=======
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { ListFlightsComponent } from './list-flights/list-flights.component';



const routes: Routes = [
  { path:'',component:HomeComponent, children: [
    {path:'viewBooking',component:ViewBookingComponent},

    {path:'pay/:bookingid',component:PaymentComponent},
    {path:'invoice/:bookingid',component:InvoiceComponent},

    {path:'modifyBooking',component:ModifyBookingComponent},
	{ path: "searchFlights", component: SearchFlightComponent },
  { path: "listFlights/:from/:to/:date/:count", component: ListFlightsComponent }
>>>>>>> 2a835862473a46a6911ed146136caba10f872a73

    { path: 'pay/:bookingid',component:PaymentComponent},
    { path: 'invoice/:bookingid',component:InvoiceComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
