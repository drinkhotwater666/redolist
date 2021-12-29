import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const appRoute: Routes = [{
  path: '',
  redirectTo: '/home',//default index
  pathMatch: 'full'
}, {
  path: 'home',
  component: HomeComponent,
  children: [{
    path: '',
    loadChildren: () => import('./function/function.module').then(mod => mod.FunctionModule)
  }]
}]


@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
