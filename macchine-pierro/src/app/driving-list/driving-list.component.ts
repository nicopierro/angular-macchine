import { Component, OnInit, Input } from '@angular/core';
import { Mezzo } from '../driving.model'

@Component({
  selector: 'app-driving-list',
  templateUrl: './driving-list.component.html',
  styleUrls: ['./driving-list.component.css']
})

export class DrivingListComponent implements OnInit {

  @Input() listaMezzi: Mezzo[]
  @Input() rented: Mezzo;

  constructor() {}

  ngOnInit(): void {

  }

  noleggia(mezzo: Mezzo) {
    this.rented.descrizione = mezzo.descrizione
    this.rented.tariffa = mezzo.tariffa
    this.rented.tipo = mezzo.tipo
    this.rented.valutazionemedia = mezzo.valutazionemedia
  }

}
