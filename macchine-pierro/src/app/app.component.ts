import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mezzo } from './driving.model';
import { Observable } from 'rxjs';
import { Rent } from './rent.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  obsMezzi : Observable<Mezzo[]>
  constructor(private http: HttpClient) {}
  listaMezzi: Mezzo[];
  rented: Mezzo = new Mezzo("#","#","#", "#")
  rentedVector: Rent[] = new Array<Rent>()

  ngOnInit(): void {
    this.obsMezzi = this.http.get<Mezzo[]>('https://my-json-server.typicode.com/malizia-g/fine_anno_exp/mezzi')
    this.obsMezzi.subscribe(this.getMezzi)
  }

  getMezzi = (data : Mezzo[]) => {
    this.listaMezzi = data;
  }

}
