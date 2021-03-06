import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customerservice/customer.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  bookingid:any;
  bookingdata:any;
  userid:any;
  amount:any;
  password:any;
  entry:any;
  PaymentForm: FormGroup;
  status:any;
  submitted: boolean=false; 
  constructor(private router: Router, private route: ActivatedRoute, private ser: CustomerService,private formBuilder:FormBuilder) { 
  this.bookingid = localStorage.bookingId;
  }

  ngOnInit(): void {

    this.PaymentForm = this.formBuilder.group({password:['',[Validators.required]],name:['',[Validators.required]],
    cardnumber:['',[Validators.required,Validators.pattern("[0-9]{16}")]],year:['',[Validators.required]]
    ,month:['',[Validators.required]]});

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
    this.status=data.bookingStatus;
    this.userid = data.user.userId;
    this.amount = data.ticketPrice;
    this.password = data.user.password;
    console.log(data);
  }
 
  cancel(){
    alert("Cancel the payment.")
      this.ser.setbookingstatus(this.bookingid,this.userid,"Payment Cancelled",this.amount).subscribe(
        data => {
          return this.setstatus(data);
        },
        error=>this.handleerror(error));  
     
  }

  submit(){
    this.submitted=true
    if(this.PaymentForm.invalid)
    return;

    this.entry = this.PaymentForm.controls.password.value;
    if(this.entry == this.password){
      this.ser.setbookingstatus(this.bookingid,this.userid,"Payment Successful",this.amount).subscribe(
        data => {
          return this.setstatus(data);
        },
        error=>this.handleerror(error));    
    }
    else{
      alert("Incorrect Password")
    }

  }
  setstatus(data) {
    if(data == 1){
      this.router.navigate(["/customer/invoice/",this.bookingid]);
    }
   }
   handleerror(error){
    alert(error.error.message);
    this.router.navigate(["/customer/invoice/",this.bookingid]);
  }
 
}
