import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NombreJoueursService {

  private nombresJoueurs = new BehaviorSubject(0);

  nombreJoueurs$ = this.nombresJoueurs.asObservable();

  constructor() { }

  getNombreJoueurs(){
    return this.nombreJoueurs$;
  }

  nombreJoueursChange(nombreJoueurs: number){
    this.nombresJoueurs.next(nombreJoueurs);
  }
}
