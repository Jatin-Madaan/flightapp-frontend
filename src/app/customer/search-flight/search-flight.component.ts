import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { formatDate } from "@angular/common";

@Component({
  selector: "app-search-flight",
  templateUrl: "./search-flight.component.html",
  styleUrls: ["./search-flight.component.css"],
})
export class SearchFlightComponent implements OnInit {
  searchForm: FormGroup;
  submitted: boolean = false;
  today = new Date();
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      from: ["", [Validators.required]],
      to: ["", [Validators.required]],
      date: ["", [Validators.required]],
      passengers: [
        "",
        [Validators.required, Validators.min(1), Validators.max(1)],
      ],
    });
  }

  searchFlight() {
    this.submitted = true;
    if (this.searchForm.invalid) {
      return;
    }
    let from = this.searchForm.controls.from.value;
    let to = this.searchForm.controls.to.value;
    let date = this.searchForm.controls.date.value;
    let count = this.searchForm.controls.passengers.value;
    let currentdate: any = formatDate(this.today, "yyyy-MM-dd", "en_US");
    if (from == to) {
      alert(`Source and Destination can't be same`);
      return;
    }
    if (date < currentdate) {
      alert("Departure date can't be below than current date");
      return;
    }
    this.router.navigate(["customer/listFlights", from, to, date, count]);
  }
}
