import { Component, OnInit, Input } from '@angular/core';
import { Mezzo } from '../driving.model'

@Component({
  selector: 'app-driving-list',
  templateUrl: './driving-list.component.html',
  styleUrls: ['./driving-list.component.css']
})

export class DrivingListComponent implements OnInit {

  @Input() listaMezzi: Mezzo[]

  constructor() {}

  ngOnInit(): void {

  }

  noleggia(mezzo) {
    console.log(mezzo)
  }

}
