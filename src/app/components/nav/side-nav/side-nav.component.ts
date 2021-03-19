import { Component, OnInit } from "@angular/core";
import { OrdersService } from "../../../shared/services/orders.service";
import { AuthService } from "../../../shared/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.css"],
})
export class SideNavComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public ordersService: OrdersService,
    public router: Router
  ) {}

  ngOnInit(): void {}
}
