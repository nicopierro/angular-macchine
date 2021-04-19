import { Component, Input, OnInit } from '@angular/core';
import { Rent } from '../rent.model'

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.css']
})
export class RentListComponent implements OnInit {

  @Input() rentedVector : Rent[];

  constructor() { }

  ngOnInit(): void {
  }

}
