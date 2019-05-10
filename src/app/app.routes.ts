import { Routes } from '@angular/router';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { HomeComponent } from './home/home.component';
import { PassengerSearchComponent } from './flight-booking/passenger-search/passenger-search.component';
import { AboutComponent } from './about/about.component';
import { FlightEditComponent } from './flight-booking/flight-edit/flight-edit.component';
import { LoginGuard } from './shared/login.guard';


export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'flight-booking',
        loadChildren: './flight-booking/flight-booking.module#FlightBookingModule'
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
]
