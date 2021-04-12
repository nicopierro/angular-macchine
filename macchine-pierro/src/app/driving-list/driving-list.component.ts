import { Component, OnInit } from '@angular/core';
import { Mezzo } from '../driving.model'

@Component({
  selector: 'app-driving-list',
  templateUrl: './driving-list.component.html',
  styleUrls: ['./driving-list.component.css']
})

export class DrivingListComponent implements OnInit {

  listMezzi: Mezzo[]

  constructor() {}

  ngOnInit(): void {

  }

}
