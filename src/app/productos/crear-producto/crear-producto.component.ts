import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/producto.model';
import { Router } from '@angular/router';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})
export class CrearProductoComponent implements OnInit {

  @ViewChild('nombre', {static: false}) nombreRef: ElementRef;
  formProducto: FormGroup;
  validacion = false;

  constructor(private productosService: ProductosService,
              private router: Router,
              private mensajesService: MensajesService) { }

  ngOnInit() {
    this.formProducto = new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      descripcion: new FormControl(''),
      precio: new FormControl(null),
      sku: new FormControl('')
    })
  }

  sendProducto() {
    let producto: Producto = new Producto(
      this.formProducto.get('nombre').value,
      this.formProducto.get('descripcion').value,
      this.formProducto.get('precio').value,
      this.formProducto.get('sku').value
      )
    this.productosService.postProducto(producto)
                  .subscribe((res:any)=>{
                      this.mensajesService.setMensaje(res.mensaje, 'El producto ha sido creado correctamente');
                      this.router.navigate(['/listado-productos']);
                    },(err:any)=>{
                      if(err.error.error !== undefined) {
                        this.mensajesService.setMensaje('Ya existe un producto con ese sku', 'error');
                      } else {
                        this.mensajesService.setMensaje('Error de conexión con los servidores, inténtelo más tarde', 'warning');
                      }
                    })
  }

  showValidacion() {
    this.nombreRef.nativeElement.classList.remove('inicio');
    this.validacion = true;
  }

}
