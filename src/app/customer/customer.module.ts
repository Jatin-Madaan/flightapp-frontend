import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './home/home.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { PaymentComponent } from './payment/payment.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModifyBookingComponent } from './modify-booking/modify-booking.component';


@NgModule({
  declarations: [HomeComponent,ViewBookingComponent, PaymentComponent, ModifyBookingComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    HttpClientModule
  ]
})
export class CustomerModule { }
