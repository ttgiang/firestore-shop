import { Injectable } from "@angular/core";
import { User } from "../services/user";
import { auth } from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class OrdersService {
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router
  ) {
    //
  }

  cart() {
    this.router.navigate(["cart"]);
  }

  checkOut() {
    console.log("check out");
  }

  orders() {
    this.router.navigate(["orders"]);
  }

  products() {
    this.router.navigate(["products"]);
  }
}
