import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Gastos } from '../gastos.model';
import { GastosService } from '../gastos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  gastos:Gastos[] = [];

  // Variable para propagar actualizacion de Header
  @Output() variablesHeader = new EventEmitter<any>();

  constructor(private gastosService: GastosService) { 
    gastosService.actualizarHeader.subscribe((actualizar: boolean) => {
      if (actualizar) {
        this.actualizarHeader();
      }
    });
   }

  ngOnInit(): void {
    this.gastos = this.gastosService.gastos;
  }

  tipOperacion:String = "ingreso";
  detalle:String;
  precio:number;
  
  operacion(event: Event):void{
    this.tipOperacion = (<HTMLSelectElement>event.target).value;
  }  

  agregar():void{
    let gasto = new Gastos(this.tipOperacion, this.detalle, this.precio, this.gastosService.idGasto++);
    this.gastosService.agregarGasto(gasto);
    // Actualizamos los valores del Header
    this.actualizarHeader();
    // Actualizamos lista Ingresos
    this.actualizarIngresos();
    // Actualizamos lista Egresos
    this.actualizarEgresos();
    // Limpiamos cajas de texto
    this.detalle = "";
    this.precio = 0;    
  }

  actualizarHeader():void{    
    let arrayHeader = [
      this.gastosService.presupuestoDisponible(),
      this.gastosService.totalIngresos(),
      this.gastosService.totalEgresos()
    ];
    this.variablesHeader.emit(arrayHeader);
  }

  actualizarIngresos():void{
    this.gastosService.actualizarIngresos.emit(true);
  }

  actualizarEgresos():void{
    this.gastosService.actualizarEgresos.emit(true);
  }


}
