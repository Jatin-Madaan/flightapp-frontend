import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { PaymentComponent } from './payment/payment.component';
import { InvoiceComponent } from './invoice/invoice.component';
//import { ModifyBookingComponent } from './modify-booking/modify-booking.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { ListFlightsComponent } from './list-flights/list-flights.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'viewBooking', component: ViewBookingComponent },
      { path: 'addBooking', component: AddBookingComponent },
      { path: 'pay/:bookingid', component: PaymentComponent },
      { path: 'invoice/:bookingid', component: InvoiceComponent },
      //{ path: 'modifyBooking', component: ModifyBookingComponent },
      { path: "searchFlights", component: SearchFlightComponent },
      { path: "listFlights/:from/:to/:date/:count", component: ListFlightsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
