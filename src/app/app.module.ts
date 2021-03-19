import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// Reactive Form
import { ReactiveFormsModule } from "@angular/forms";

// App routing modules
import { AppRoutingModule } from "./shared/routing/app-routing.module";

// App components
import { AppComponent } from "./app.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { VerifyEmailComponent } from "./components/verify-email/verify-email.component";

// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../environments/environment";

// Auth service
import { AuthService } from "./shared/services/auth.service";
import { OrdersComponent } from "./components/orders/orders.component";
import { ProductsComponent } from "./components/products/products.component";
import { CartComponent } from "./components/cart/cart.component";
import { TopNavComponent } from "./components/nav/top-nav/top-nav.component";
import { SideNavComponent } from "./components/nav/side-nav/side-nav.component";

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    OrdersComponent,
    ProductsComponent,
    CartComponent,
    TopNavComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
