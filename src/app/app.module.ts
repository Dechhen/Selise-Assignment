import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { MenusComponent } from './menus/menus.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenusComponent,
    ShopComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    CheckoutComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([

      { path: '', component: HomeComponent },

      {
        path: 'menus', component: MenusComponent
      },
      {
        path: 'shop', component: ShopComponent
      },
      {
        path: 'checkout', component: CheckoutComponent
      },
      {
        path: 'contact', component: ContactComponent
      },

      {
        path: 'cart', component: CartComponent
      },

      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'signup', component: SignupComponent
      },
      {
        path: 'confirm', component: ConfirmComponent
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
