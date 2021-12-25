import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TodosModule } from './todos/todos.module'
import { TodoComponent } from './todos/todo/todo.component';
// import { NzResultNotFoundComponent } from 'ng-zorro-antd/result/partial/not-found';
import { NotfoundComponent } from './notfound/notfound.component'
import { AuthGuard } from './auth.guard'
import { WeatherComponent } from './weather/weather/weather.component';


const routes: Routes = [];

let appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',//default index
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'employees',
        loadChildren: () => import('./employees/employees.module').then(mod => mod.EmployeesModule)
      },
      {
        path: 'weather',
        loadChildren: () => import('./weather/weather.module').then(mod => mod.WeatherModule)
      }
    ]

  },
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'todo',
    component: TodoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'weather',
    component: WeatherComponent

  },
  {
    path: '**',
    component: NotfoundComponent
  }
]

@NgModule({
  declarations: [NotfoundComponent],
  imports: [
    CommonModule,
    TodosModule,
    RouterModule.forRoot(appRoutes),
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
