import { Component, OnInit } from '@angular/core';
import { NombreJoueursService } from 'src/app/nombre-joueurs.service';
import { NombreJoueursComponent } from '../nombre-joueurs/nombre-joueurs.component';

@Component({
  selector: 'app-nombre-manches',
  templateUrl: './nombre-manches.component.html',
  styleUrls: ['./nombre-manches.component.scss']
})
export class NombreManchesComponent implements OnInit {

  texte: string = "Quelle est le nombre de manches?";
  value!: number;
  hidden: boolean = false;


  constructor(private nombreJoueursService: NombreJoueursService) { }

  ngOnInit(): void {
  }

  getNombreJoueurs(): void{
    this.nombreJoueursService.getNombreJoueurs().subscribe(value => this.value = value);
  }

  onKey(nombre: any){
    this.value = this.comparaisonJoueursManches(NombreJoueursComponent.prototype.value,nombre);
    this.hidden = true;
    // this.getNombreJoueurs();
  }

  isEven(nombre: any): boolean{
    if(nombre%2 ===0){
      return true;
    } else{
      return false;
    }
  }

  comparaisonJoueursManches(nombreJoueurs: number, nombreManches: number): number{
    if(this.isEven(nombreJoueurs) !== this.isEven(nombreManches)){
      return nombreManches;
    } else {
      return nombreManches+1;
    }
  }

}
