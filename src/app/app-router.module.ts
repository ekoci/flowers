import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AllDataComponent} from './all-data/general/general.module';
import {OrdersComponent} from './all-data/orders/orders.component';
import {ContactsComponent} from './all-data/contacts/contacts.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, children: [
      { path: 'general', component: AllDataComponent},
      { path: 'orders', component: OrdersComponent},
      { path: 'contact', component:  ContactsComponent}]
     },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
