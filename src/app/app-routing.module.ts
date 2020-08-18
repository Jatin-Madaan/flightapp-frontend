import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'login', loadChildren:()=>import('./signup/signup.module').then(m=>m.SignupModule),canLoad:[] },
  { path: 'admin', loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule),canLoad:[] },
  { path: 'customer', loadChildren:()=>import('./customer/customer.module').then(m=>m.CustomerModule),canLoad:[] },
  { path: '**', loadChildren:()=>import('./customer/customer.module').then(m=>m.CustomerModule), canLoad:[] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
