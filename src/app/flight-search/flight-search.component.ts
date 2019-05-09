import { Component, OnInit } from '@angular/core';
import { Flight } from '../entities/flight';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { FlightService } from './flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  // private http: HttpClient;

  constructor(private flightService: FlightService) {
    // this.http = http;
  }

  ngOnInit() {
  }

  search() {
    this
    .flightService
    .find(this.from, this.to)
    .subscribe(
      (flights) => {
        this.flights = flights;
      },
      (err) => {
        console.error('err', err);
      }
    );

  }

  select(f: Flight) {
    this.selectedFlight = f;  
  }

}
