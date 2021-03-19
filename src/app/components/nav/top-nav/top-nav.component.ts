import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../shared/services/auth.service";

@Component({
  selector: "top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.css"],
})
export class TopNavComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
