import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { BreadcrumbComponent } from './comunes/breadcrumb/breadcrumb.component';
import { NavComponent } from './comunes/nav/nav.component';
import { ModalComponent } from './comunes/modal/modal.component';
import { SpinnerComponent } from './comunes/spinner/spinner.component';
import { ListadoProductosComponent } from './productos/listado-productos/listado-productos.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BreadcrumbComponent,
    NavComponent,
    ModalComponent,
    SpinnerComponent,
    ListadoProductosComponent,
    CrearProductoComponent,
    EditarProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
