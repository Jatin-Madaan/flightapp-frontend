<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './home/home.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { PaymentComponent } from './payment/payment.component';

import{ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InvoiceComponent } from './invoice/invoice.component';
import { ModifyBookingComponent } from './modify-booking/modify-booking.component';
import { AddBookingComponent } from './add-booking/add-booking.component';

=======
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
>>>>>>> 2a835862473a46a6911ed146136caba10f872a73

import { CustomerRoutingModule } from "./customer-routing.module";
import { HomeComponent } from "./home/home.component";
import { ViewBookingComponent } from "./view-booking/view-booking.component";
import { PaymentComponent } from "./payment/payment.component";
import { SearchFlightComponent } from "./search-flight/search-flight.component";
import { ListFlightsComponent } from "./list-flights/list-flights.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { InvoiceComponent } from "./invoice/invoice.component";
import { ModifyBookingComponent } from "./modify-booking/modify-booking.component";

@NgModule({
<<<<<<< HEAD
  declarations: [HomeComponent,ViewBookingComponent, PaymentComponent, ModifyBookingComponent,InvoiceComponent, AddBookingComponent],
=======
  declarations: [
    HomeComponent,
    ViewBookingComponent,
    PaymentComponent,
    ModifyBookingComponent,
    InvoiceComponent,
    SearchFlightComponent,
    ListFlightsComponent,
  ],
>>>>>>> 2a835862473a46a6911ed146136caba10f872a73
  imports: [
    CommonModule,
    CustomerRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class CustomerModule {}
