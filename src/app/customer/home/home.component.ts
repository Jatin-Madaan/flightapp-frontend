import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}
  isLoggedIn : boolean = false;

  ngOnInit() {



    // this.router.navigate(["customer/searchFlights"]);

    if(localStorage.length != 0){
    if(localStorage.userId != null && localStorage.userId!='10001'){
      this.isLoggedIn = true;
    }
    this.router.navigate(["customer/searchFlights"]);
  }
}

  onLogout(){
    localStorage.removeItem("userId");
    window.location.href = "/login";
  }
}
