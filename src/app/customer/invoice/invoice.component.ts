import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customerservice/customer.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  bookingid:any;
  bookingdata:any;
  constructor(private router: Router, private route: ActivatedRoute, private ser: CustomerService) { 
    this.route.params.subscribe(params => {
      this.bookingid=params['bookingid'];
    })
  }

  ngOnInit(): void {
    this.ser.getbookingdetails(this.bookingid).subscribe(
      data => {
        return this.getbooking(data);
      },
      error=>this.ifbookingnotfound(error));  
  }
  ifbookingnotfound(error){
    alert(error.error.message)
  }

  getbooking(data) {
    this.bookingdata = data;
    console.log(this.bookingdata);
  }

}
