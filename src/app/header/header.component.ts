import { Component, Input, OnInit } from '@angular/core';
import { GastosService } from '../gastos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() presupuestoDisponible:number;
  @Input() totalIngresos:number;
  @Input() totalEgresos:number;

  constructor(private gastosService: GastosService) { }

  ngOnInit(): void {
    this.presupuestoDisponible = this.gastosService.presupuestoDisponible();
    this.totalIngresos = this.gastosService.totalIngresos();
    this.totalEgresos = this.gastosService.totalEgresos();
  }


}
