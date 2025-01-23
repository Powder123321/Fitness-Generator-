import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';

import { RegisterComponent } from './register/register/register.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeditationComponent } from './meditation/meditation.component';
import { RunningComponent } from './running/running.component';
import { FoodComponent } from './food/food.component';
import { TodolistComponent } from './todolist/todolist.component';
import { SavingsComponent } from './savings/savings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    RegisterComponent,
    NavbarComponent,
    LogoutComponent,
    LoginComponent,
    AboutUsComponent,
    FooterComponent,
    MeditationComponent,
    RunningComponent,
    FoodComponent,
    TodolistComponent,
    SavingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
