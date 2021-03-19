import { ProductsComponent } from "./../../components/products/products.component";
import { CartComponent } from "./../../components/cart/cart.component";
import { OrdersComponent } from "./../../components/orders/orders.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SignInComponent } from "../../components/sign-in/sign-in.component";
import { SignUpComponent } from "../../components/sign-up/sign-up.component";
import { DashboardComponent } from "../../components/dashboard/dashboard.component";
import { ForgotPasswordComponent } from "../../components/forgot-password/forgot-password.component";
import { VerifyEmailComponent } from "../../components/verify-email/verify-email.component";

import { AuthGuard } from "../../shared/guard/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "/sign-in", pathMatch: "full" },
  { path: "sign-in", component: SignInComponent },
  { path: "register-user", component: SignUpComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: "forgot-password", component: ForgotPasswordComponent },
  { path: "verify-email-address", component: VerifyEmailComponent },
  { path: "orders", component: OrdersComponent },
  { path: "cart", component: CartComponent },
  { path: "products", component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
