import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

import { RegisterComponent } from './register/register/register.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MeditationComponent } from './meditation/meditation.component';
import { RunningComponent } from './running/running.component';
import { FoodComponent } from './food/food.component';
import { TodolistComponent } from './todolist/todolist.component';
import { SavingsComponent } from './savings/savings.component';

const routes: Routes = [
  { path: '', component: AboutUsComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'meditation', component: MeditationComponent },
  { path: 'running', component: RunningComponent },
  { path: 'food', component: FoodComponent },
  { path: 'todolist', component: TodolistComponent },
  { path: 'savings', component: SavingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
