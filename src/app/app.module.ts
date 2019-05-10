import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { FlightBookingModule } from './flight-booking/flight-booking.module';

@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(APP_ROUTES, { preloadingStrategy: PreloadAllModules }),
      
      // FlightBookingModule // Do not import lazy modules
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      HomeComponent,
      AboutComponent
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
