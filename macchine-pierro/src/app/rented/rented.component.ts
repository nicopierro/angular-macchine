import { Component, OnInit, Input } from '@angular/core';
import { Mezzo } from '../driving.model'

@Component({
  selector: 'app-rented',
  templateUrl: './rented.component.html',
  styleUrls: ['./rented.component.css']
})
export class RentedComponent implements OnInit {

  @Input() rented : Mezzo;
  constructor() { }

  ngOnInit(): void {
  }

}
