import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { LoginModComponent } from './login-mod/login-mod.component';
import { RegistratiComponent } from './registrati/registrati.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  { path: '', redirectTo: 'login-mod', pathMatch: 'full' },
 
  {
    path:'info',
    component:InfoComponent
  }
  ,
  {
    path:'table',
    component:TableComponent
  },{
    path:'login-mod',
    component:LoginModComponent
  },{
    path:'registrati',
    component:RegistratiComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
