import { Component,
         OnDestroy,
         OnInit } from '@angular/core';
import { GeneratorService } from 'src/app/core/services/generator.service';
import { EmployeeData } from 'src/app/core/models/employee.model';
import { Observable,
         Subscription } from 'rxjs';

const names = ['nicolas','juan', 'felipe','maria'];

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit,
                                        OnDestroy
{

  lista1:string = "lista 1";
  lista2:string = "lista 2";
  salesList:EmployeeData[]=[];
  bList: EmployeeData[]=[];
  value$: Observable<number>;
  sub$: Subscription;

  constructor(private generatorService: GeneratorService) {
    this.value$ = this.generatorService.getData();
  }
  ngOnDestroy(): void {
    console.log('destry');
    // this.sub$.unsubscribe();
  }

  ngOnInit() {
    this.salesList = this.generatorService.generate(names,[10,20],10);
    this.bList = this.generatorService.generate(names,[10,20],10);
    // this.sub$ = this.generatorService.getData()
    // .subscribe(value => {
    //   this.value = value;
    //   console.log(this.value);
    // });
  }

  addItem(list:EmployeeData[], label: string ){
     list.unshift({
       label,
       num: this.generatorService.generateNumber([10,20])
     });
  }

}
