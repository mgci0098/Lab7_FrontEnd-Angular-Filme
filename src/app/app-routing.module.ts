import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilmeComponent } from './components/filme/filme.component';
import { UserRoleComponent } from './components/userRole/userRole.component';
import { UsersComponent } from './components/users/users.component';
import { ComentariiComponent } from './components/comentarii/comentarii.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children:[
      {
        path: 'filme',
        component: FilmeComponent
      },
      {
        path: 'userRoles',
        component: UserRoleComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'comentarii',
        component: ComentariiComponent
      }
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
