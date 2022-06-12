import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nombre-joueurs',
  templateUrl: './nombre-joueurs.component.html',
  styleUrls: ['./nombre-joueurs.component.scss']
})
export class NombreJoueursComponent implements OnInit {

  value: number = 0;

  hidden: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onKey(nombre: any){
    this.value = nombre;
    this.hidden = true;
  }

}
