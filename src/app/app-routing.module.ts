import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoProductosComponent } from './productos/listado-productos/listado-productos.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';

const routes: Routes = [
  {
   path:'', 
   component: InicioComponent,
   data: {rutas: [{ruta:'/',texto:'Inicio'}]}
  },
  {
   path:'listado-productos', 
   component: ListadoProductosComponent,
   data: {rutas: [{ruta:'/',texto:'Inicio'},{ruta:'/listado-productos',texto:'Listado de Productos'}]}
  },
  {
   path:'crear-producto', 
   component: CrearProductoComponent,
   data: {rutas: [
                  {ruta:'/',texto:'Inicio'},
                  {ruta:'/listado-productos',texto:'Listado de productos'},
                  {ruta:'/crear-producto',texto:'Crear producto'}
                ]
          }
  },
  {
   path:'editar-producto/:id', 
   component: EditarProductoComponent,
   data: {rutas: [
                  {ruta:'/',texto:'Inicio'},
                  {ruta:'/listado-productos',texto:'Listado de productos'},
                  {ruta:'/editar-producto/:id',texto:'Editar producto'}
                ]
          }
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
