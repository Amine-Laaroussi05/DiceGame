import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.scss']
})
export class GenericInputComponent implements OnInit {




  @Input()
  texte!: string;

  @Input()
  value! : number;

  @Input()
  hidden!: boolean;

  @Input()
  onKey(number: string){};





  constructor() { }

  ngOnInit(): void {
  }



}
