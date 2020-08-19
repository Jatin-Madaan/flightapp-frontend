import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { AdminService } from '../adminservice/admin.service';
import { Flight } from 'src/app/models/Flight';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
i:number;
name1:string;
show:boolean=false;
showtab:boolean=false;
flights:Flight[];
flight:Flight;
flight2:Flight;
id:number;
er=null;
ok:boolean=false;
submitted:boolean=false;
form:FormGroup;
updateStatus:boolean=false;
addStatus:boolean=false;
@ViewChild('f', { static: true }) el: ElementRef;

   ngAfterViewInit() {
      // this.input is NOW valid !!
   }
  constructor(private service:AdminService,private ser:AdminService) { }

  ngOnInit() {
    this.flight=new Flight();
    this.flights=[];
    this.i=0;
    
    this.flight2=new Flight();
    this.getFlights();
  }
  getFlights()
  {
    this.service.getFlights().subscribe(data=>{this.flights=data
    });
  }
  addFlight(flight:Flight,form:NgForm)
  {this.addStatus=false;
   // this.service.addFlight(this.flight).subscribe(data=>{console.log(data);  this.flight=new Flight(); this.getFlights()},error=>console.log("error in posting")
    //)
   console.log(this.flight.flightId)
    this.ok=false;
    this.service.getFlights().subscribe(data=>{
     for(let i=0;i<data.length;i++)
     {console.log(this.flight.flightId)
         if(data[i].flightId==this.flight.flightId)
      {console.log(data[i].flightId)
         this.ok=true;
         break;
       }
     }
    
       if(this.ok==false)
     {
       
       
       this.service.addFlight(flight).subscribe(data=>{console.log(data),
      this.addStatus=true;
      form.form.reset();
      this.flight=new Flight(); this.getFlights()},error=>console.log("error in posting")
      )
  }
//     }
   
   
//   }
    })

  }
  delete(id:number)
  {this.addStatus=false;
    this.updateStatus=false;
    this.service.deleteFlight(id).subscribe(data=>{console.log(data);this.getFlights();this.show=false;},error=>console.log("error in deleting")
    )
    
  }
  search()

  {this.submitted=false;
    this.addStatus=false;
    this.updateStatus=false;
    this.flight2=new Flight();
    this.show=false;
    this.service.searchFlight(this.id).subscribe(data=>{this.flight2=data;this.show=true;},error=>{this.er=error;this.submitted=true;}
    )
    
    
  }
  
  updateTab(flight1:Flight)
  {this.showtab=true;
    this.flight2=flight1;
  }
  update(id:number,flight:Flight)
  {this.addStatus=false;
    this.updateStatus=false;
  console.log("ok"); 
  this.updateStatus=false;
    this.service.updateFlight(id,flight).subscribe(data=>{console.log(data);this.getFlights();this.showtab=false;
      this.updateStatus=true;this.flight=new Flight()},error=>console.log("error in deleting")
    )
    //this.ngOnInit()
  }
  



  

}
