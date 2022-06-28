import { EventEmitter } from "@angular/core";
import { Gastos } from "./gastos.model";

export class GastosService{

    idGasto:number = 0;

    gastos:Gastos [] = [
        new Gastos("ingreso", "Salario", 500, this.idGasto++),
        new Gastos("ingreso", "Bono", 50, this.idGasto++),
        new Gastos("egreso", "Recibos", 100, this.idGasto++)
    ];

    actualizarIngresos = new EventEmitter<boolean>();
    actualizarEgresos = new EventEmitter<boolean>();
    actualizarHeader = new EventEmitter<boolean>();

    agregarGasto(gasto: Gastos):void{
        this.gastos.push(gasto);
    }

    eliminarGasto(idGasto: number):void{        
        for (let i = 0; i < this.gastos.length; i++) {
            if(this.gastos[i].id == idGasto){
                this.gastos.splice(i,1);
            }
        }        
    }

    presupuestoDisponible():number{        
        let presupuesto:number = 0;
        let ingreso:number = 0;
        let egreso:number = 0;
    
        for (let i = 0; i < this.gastos.length; i++) {      
          if (this.gastos[i].tipo == "ingreso") {
            ingreso += this.gastos[i].precio;
          }else{
            egreso += this.gastos[i].precio;
          }      
        }
        return presupuesto = ingreso - egreso;
    }

    totalIngresos():number{
        let totalIngresos:number = 0;

        for (let i = 0; i < this.gastos.length; i++) {
            if (this.gastos[i].tipo == "ingreso") {
                totalIngresos += this.gastos[i].precio;
            }
        }
        return totalIngresos;
    }

    totalEgresos():number{
        let totalEgresos:number = 0;

        for (let i = 0; i < this.gastos.length; i++) {
            if (this.gastos[i].tipo == "egreso") {
                totalEgresos += this.gastos[i].precio;
            }
        }
        return totalEgresos;
    }

}