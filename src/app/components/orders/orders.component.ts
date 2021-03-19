import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.css"],
})
export class OrdersComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
