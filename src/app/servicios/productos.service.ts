import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  urlProducto = environment.urlProducto;

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get(this.urlProducto)
                  .pipe(
                    map((res:any)=>{
                      return res;
                    })
                  )
  }

  getProducto(nombre) {
    return this.http.get(this.urlProducto + '/search/' + nombre)
                  .pipe(
                    map((res:any)=>{
                      return res;
                    })
                  )
  }

  getProductoId(id) {
    return this.http.get(this.urlProducto + '/' + id)
                  .pipe(
                    map((res:any)=>{
                      return res;
                    })
                  )
  }

  postProducto(producto: Producto) {
    return this.http.post(this.urlProducto, producto)
                  .pipe(
                    map((res:any)=>{
                      return res;
                    })
                  )
  }

  putProducto(id, producto){
    return this.http.put(this.urlProducto + '/' + id, producto)
                  .pipe(
                    map((res:any)=>{
                      return res;
                    })
                  )
  }

  deleteProducto(id) {
    return this.http.delete(this.urlProducto + '/' + id)
                  .pipe(
                    map((res:any)=>{
                      return res;
                    })
                  )
  }

}
