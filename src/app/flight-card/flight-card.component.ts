import { Component, OnInit, Input, EventEmitter, Output, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Flight } from '../entities/flight';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit, OnChanges, OnDestroy {

  @Input() item: Flight;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor() {
    // tslint:disable-next-line: no-console
    console.debug('ctor', this.item, this.selected);
  }

  ngOnInit() {

    setTimeout(() => this.selectedChange.next(true), 0);

    // tslint:disable-next-line: no-console
    console.debug('ngOnInit', this.item, this.selected);
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line: no-console
    console.debug('ngOnDestroy', this.item, this.selected);
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['item']) {
      // tslint:disable-next-line: no-console
      console.debug('item changed', this.item, this.selected);
    }
    else if (changes['selected']) {
      // tslint:disable-next-line: no-console
      console.debug('selected changed', this.item, this.selected);
    }

    // tslint:disable-next-line: no-console
    console.debug('ngOnChanges', this.item, this.selected);
  }

  select() {
    this.selected = true;
    this.selectedChange.next(true);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.next(false);
  }

}
