import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './home/home.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [HomeComponent,ViewBookingComponent, PaymentComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
