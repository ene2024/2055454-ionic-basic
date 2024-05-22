import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAlumnosComponent } from '../lista-alumnos/lista-alumnos.component';
import { ProductosComponent } from '../productos/productos.component';


@NgModule({
  declarations: [ ListaAlumnosComponent, ProductosComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
