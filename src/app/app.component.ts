import { Component, OnInit } from '@angular/core';
import { Gastos } from './gastos.model';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Presupuesto';
  
  // Header
  presupuestoDisponible:number;
  totalIngresos:number;
  totalEgresos:number;
  constructor(private loggerService: LoggerService){}

  ngOnInit(): void {
  }

  actualizarHeader(arrayHeader: any):void{    
    this.presupuestoDisponible = arrayHeader[0];
    this.totalIngresos = arrayHeader[1];
    this.totalEgresos = arrayHeader[2];
  }

  

}
