import { Component, OnInit } from '@angular/core';
import { GeneratorService } from 'src/app/core/services/generator.service';
import { EmployeeData } from 'src/app/core/models/employee.model';

const names = ['nicolas','juan', 'felipe','maria'];

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  lista1:string = "lista 1";
  lista2:string = "lista 2";
  salesList:EmployeeData[]=[];
  bList: EmployeeData[]=[];

  constructor(private generatorService: GeneratorService) { }

  ngOnInit() {
    this.salesList = this.generatorService.generate(names,[10,20],10);
    this.bList = this.generatorService.generate(names,[10,20],10);
  }

  addItem(list:EmployeeData[], label: string ){
     list.unshift({
       label,
       num: this.generatorService.generateNumber([10,20])
     });
  }

}
