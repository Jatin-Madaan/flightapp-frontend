import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CustomerRoutingModule } from "./customer-routing.module";
import { HomeComponent } from "./home/home.component";
import { ViewBookingComponent } from "./view-booking/view-booking.component";
import { PaymentComponent } from "./payment/payment.component";
import { SearchFlightComponent } from "./search-flight/search-flight.component";
import { ListFlightsComponent } from "./list-flights/list-flights.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { InvoiceComponent } from "./invoice/invoice.component";
//import { ModifyBookingComponent } from "./modify-booking/modify-booking.component";
import { SortPipe } from "./customerpipes/sort.pipe";

@NgModule({
  declarations: [
    HomeComponent,
    ViewBookingComponent,
    PaymentComponent,
    // ModifyBookingComponent,
    InvoiceComponent,
    SearchFlightComponent,
    ListFlightsComponent,
    SortPipe,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class CustomerModule {}
