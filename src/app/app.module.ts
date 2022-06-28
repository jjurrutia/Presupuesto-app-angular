import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HeaderComponent } from './header/header.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';
import { GastosService } from './gastos.service';
import { LoggerService } from './logger.service';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    HeaderComponent,
    IngresosComponent,
    EgresosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GastosService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
