import { Component, OnInit, NgZone } from "@angular/core";
import { AuthService } from "../../shared/services/auth.service";
import { TopNavComponent } from "../nav/top-nav/top-nav.component";
import { SideNavComponent } from "../nav/side-nav/side-nav.component";
// import { OrdersService } from "./../../shared/services/orders.service";
// import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  constructor(
    public authService: AuthService,
    // public ordersService: OrdersService,
    // public router: Router,
    public ngZone: NgZone
  ) {}

  ngOnInit() {}
}
