import { Routes } from '@angular/router';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { LoginGuard } from '../shared/login.guard';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';

export const FLIGHT_BOOKING_ROUTES: Routes = [
    {
        path: 'passenger-search',
        component: PassengerSearchComponent,
        canActivate: [LoginGuard]
    },
    {
        path: 'flight-search',
        component: FlightSearchComponent
    },
    {
        path: 'flight-edit/:id',
        component: FlightEditComponent
    }
];