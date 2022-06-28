import { Component, Input, OnInit } from '@angular/core';
import { Gastos } from '../gastos.model';
import { GastosService } from '../gastos.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  @Input() ingresos:Gastos[] = [];

  constructor( private gastosService: GastosService ) { 
    gastosService.actualizarIngresos.subscribe((actualizar: boolean) => {
      if(actualizar){
        this.ingresos = [];
        this.mostrarIngresos(this.gastosService.gastos);
      }
    });
   }

  ngOnInit(): void {
    this.mostrarIngresos(this.gastosService.gastos);
  }
  
  mostrarIngresos(gastos: Gastos[]):void{
    for (let i = 0; i < gastos.length; i++) {
      if (gastos[i].tipo == "ingreso") {
        this.ingresos.push(gastos[i]);
      }
    }
  }

  eliminarIngreso(idGasto:number):void{
    this.ingresos = [];
    this.gastosService.eliminarGasto(idGasto);
    this.gastosService.actualizarHeader.emit(true);
    this.mostrarIngresos(this.gastosService.gastos);
  }

}
