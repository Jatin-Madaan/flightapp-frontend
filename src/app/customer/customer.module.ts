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



@NgModule({
  declarations: [HomeComponent,ViewBookingComponent, PaymentComponent, ModifyBookingComponent,InvoiceComponent, AddBookingComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ]
})
export class CustomerModule { }
