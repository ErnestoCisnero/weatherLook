import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PrincipalComponent } from './principal/principal.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path:'', component:PrincipalComponent 
  },
  {
    path:'**', component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);