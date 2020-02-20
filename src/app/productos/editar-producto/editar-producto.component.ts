import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Producto } from 'src/app/models/producto.model';
import { ProductosService } from 'src/app/servicios/productos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MensajesService } from 'src/app/servicios/mensajes.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.scss']
})
export class EditarProductoComponent implements OnInit {

  formProducto: FormGroup;
  id: string;
  producto: any;

  constructor(private productosService: ProductosService,
              private router: Router,
              private route: ActivatedRoute,
              private mensajesService: MensajesService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.formProducto = new FormGroup({
      nombre: new FormControl(''),
      descripcion: new FormControl(''),
      precio: new FormControl(null),
      sku: new FormControl('')
    })
    this.productosService.getProductoId(this.id)
                  .subscribe((res:any)=>{
                      if (res.producto === undefined) {
                        this.mensajesService.setMensaje(res.mensaje, 'warning');
                      } else {
                        this.producto = res.producto;
                        this.formProducto.get('nombre').setValue(this.producto.nombre);
                        this.formProducto.get('descripcion').setValue(this.producto.descripcion);
                        this.formProducto.get('precio').setValue(this.producto.precio);
                        this.formProducto.get('sku').setValue(this.producto.sku);
                      }
                    },(err:any)=>{
                      this.mensajesService.setMensaje('Error de conexión con los servidores, inténtelo más tarde', 'warning');
                    })
  }

  sendProducto() {
    let producto = {
      nombre: this.formProducto.get('nombre').value,
      descripcion:  this.formProducto.get('descripcion').value,
      precio: this.formProducto.get('precio').value
    }
    this.productosService.putProducto(this.id, producto)
                  .subscribe((res:any)=>{
                      this.mensajesService.setMensaje(res.mensaje, 'El producto fue actualizado correctamente');
                      this.router.navigate(['/listado-productos']);
                    },(err:any)=>{
                      this.mensajesService.setMensaje('Error de conexión con los servidores, inténtelo más tarde', 'warning');
                    })
  }


}
