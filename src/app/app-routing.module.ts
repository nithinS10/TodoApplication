import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './services/route-guard.service';
import { TodoComponent } from './todo/todo.component';

//To route to welcome component when login is sucess
const routes: Routes = [
  {path:'', component:LoginComponent},//default path when the angular app launches go to loin page
  {path:'login', component:LoginComponent},
  {path:'password-reset',component:PasswordresetComponent},
  {path:'register',component:RegisterComponent},
  {path:'welcome/:name', component:WelcomeComponent,canActivate:[RouteGuardService]},
  {path:'todos', component:ListTodosComponent,canActivate:[RouteGuardService]},
  {path:'logout', component:LogoutComponent,canActivate:[RouteGuardService]},
  {path:'todos/:id', component:TodoComponent,canActivate:[RouteGuardService]},
  {path:'**', component:ErrorComponent},//user enter other page it will move to error page
  //this ** will be in last only because angular will match with this so it will redirect to error
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
