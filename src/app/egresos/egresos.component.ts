import { Component, OnInit } from '@angular/core';
import { Gastos } from '../gastos.model';
import { GastosService } from '../gastos.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  egresos:Gastos[] = [];

  constructor(private gastosService: GastosService) { 
    gastosService.actualizarEgresos.subscribe((actualizar:boolean) => {
      if (actualizar) {
        this.egresos = [];
        this.mostrarEgresos(gastosService.gastos);
      }
    });
   }

  ngOnInit(): void {
    this.mostrarEgresos(this.gastosService.gastos);
  }

  mostrarEgresos(gastos: Gastos[]):void{
    for (let i = 0; i < this.gastosService.gastos.length; i++) {
      if (this.gastosService.gastos[i].tipo == "egreso") {
        this.egresos.push(this.gastosService.gastos[i]);
      }
    }
  }

  eliminarEgreso(idGasto: number):void{
    this.egresos = [];
    this.gastosService.eliminarGasto(idGasto);
    this.gastosService.actualizarHeader.emit(true);
    this.mostrarEgresos(this.gastosService.gastos);
  }

}
