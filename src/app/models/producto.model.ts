export class Producto {
    nombre: string;
    descripcion: string;
    precio: number;
    sku: string;

    constructor(nombre, descripcion, precio, sku) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.sku = sku;
    }

}