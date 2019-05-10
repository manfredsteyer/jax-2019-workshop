import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightBookingComponent } from './flight-booking.component';
import { FormsModule } from '@angular/forms';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { RouterModule } from '@angular/router';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES)
  ],
  declarations: [
    FlightBookingComponent,
    FlightSearchComponent,
    PassengerSearchComponent,
    FlightCardComponent,
    FlightEditComponent
  ]
})
export class FlightBookingModule { }
