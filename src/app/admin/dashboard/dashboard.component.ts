import { Component, OnInit } from '@angular/core';
import { AdminService } from '../adminservice/admin.service';
import { ScheduleFlight } from 'src/app/models/scheduleFlight';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if(localStorage.length == 0){
      window.location.href = "/login";
    }
  }
  
}
