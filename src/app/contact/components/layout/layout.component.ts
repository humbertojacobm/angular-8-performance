import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  lista1:string = "lista 1";
  lista2:string = "lista 2";
  constructor() { }

  ngOnInit() {
  }

}
