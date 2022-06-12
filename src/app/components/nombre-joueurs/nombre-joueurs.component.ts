import { Component, OnInit } from '@angular/core';
import { NombreJoueursService } from 'src/app/nombre-joueurs.service';


@Component({
  selector: 'app-nombre-joueurs',
  templateUrl: './nombre-joueurs.component.html',
  styleUrls: ['./nombre-joueurs.component.scss']
})
export class NombreJoueursComponent implements OnInit {

  texte:  string = "Quel est le nombre de joueurs?";

  hidden: boolean = false;

  public value!: number;

  constructor(private nombreJoueursService: NombreJoueursService) { }

  ngOnInit(): void {
  }

  onKey(nombre: any){
    this.value = nombre;
    this.hidden = true;
    // this.nombreJoueursService.nombreJoueursChange(this.value);
  }


}
