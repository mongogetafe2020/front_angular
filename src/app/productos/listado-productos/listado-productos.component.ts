import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';
import { Producto } from 'src/app/models/producto.model';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.scss']
})
export class ListadoProductosComponent implements OnInit {

  productos: Array<Producto>;
  modal = false;
  id: string;

  formSearch: FormGroup;
  @ViewChild('search', {static: false}) searchRef: ElementRef;

  showSpinner = true;

  constructor(private productosService: ProductosService,
              private mensajesService: MensajesService) { }

  ngOnInit() {
    this.loadProductos();
    this.formSearch = new FormGroup({
      search: new FormControl('')
    });
    this.onSearch();
  }

  loadProductos() {
    this.productosService.getProductos()
              .subscribe((res:any)=>{
                  this.showSpinner = false;
                  this.productos = res.productos;
                },(err:any) => {
                  this.showSpinner = false;
                  console.log(err);
                })
  }

  onSearch() {
    this.formSearch.get('search').valueChanges
                      .subscribe(nombre =>{
                        this.productos = [];
                        this.showSpinner = true;
                        if (nombre !== '') {
                          this.productosService.getProducto(nombre)
                                    .subscribe((res:any)=>{
                                        this.showSpinner = false;
                                        this.productos = res.productos;
                                      },(err:any)=>{
                                        this.showSpinner = false;
                                        console.log(err);
                                      })
                        } else {
                          this.showSpinner = false;
                          this.loadProductos()
                        }
                      })
  }

  removeProducto(id) {
    this.productosService.deleteProducto(id)
                .subscribe((res:any)=>{
                    this.mensajesService.setMensaje(res.mensaje, 'El producto ha sido eliminado correcto');
                    this.loadProductos();
                  },(err:any)=>{
                    this.mensajesService.setMensaje('Error de conexión con los servidores, inténtelo más tarde', 'warning');
                  })
  }

  showModal(id) {
    this.id = id;
    this.modal = true;
  }

  hideModal() {
    this.modal = false;
  }

  getAction(event) {
    if(event.action) {
      this.removeProducto(event.parametro);
      this.hideModal();
    } else {
      this.hideModal();
    }
  }

  showSearch() {
    this.searchRef.nativeElement.classList.add('open');
  }

}
