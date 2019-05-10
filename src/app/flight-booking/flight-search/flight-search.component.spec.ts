import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSearchComponent } from './flight-search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('FlightSearchComponent', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      
      declarations: [ FlightSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    
    expect(component.flights.length).toBe(0);

  });
});
