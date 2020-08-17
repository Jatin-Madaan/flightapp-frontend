import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { CustomerService } from "../customerservice/customer.service";
import { formatDate } from "@angular/common";
import { ScheduleFlight } from "src/app/models/scheduleFlight";

@Component({
  selector: "app-list-flights",
  templateUrl: "./list-flights.component.html",
  styleUrls: ["./list-flights.component.css"],
})
export class ListFlightsComponent implements OnInit {
  from: string;
  to: string;
  date: Date;
  count: number;
  convertDate: string;
  sc = [];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) {
    this.route.params.subscribe((params) => {
      this.from = params["from"];
      this.to = params["to"];
      this.date = params["date"];
      this.count = params["count"];
    });
  }

  ngOnInit() {
    this.convertDate = formatDate(this.date, "yyyy-MM-dd", "en_US");
    this.customerService
      .getFlights(this.from, this.to, this.convertDate, this.count)
      .subscribe((data) => {
        this.flightHandler(data);
      });
  }
  flightHandler(data) {
    this.sc = data;
    console.log(this.sc);
  }
}
