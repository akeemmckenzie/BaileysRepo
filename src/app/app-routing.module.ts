import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessbackgroundComponent } from './businessbackground/businessbackground.component';
import { CartComponent } from './cart/cart.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { MembershipComponent } from './membership/membership.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'businessbackground', component: BusinessbackgroundComponent },
  { path: 'cart', component: CartComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'membership', component: MembershipComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
