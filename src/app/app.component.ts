import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titulo: string;
  public descripcion:string;
  private mostrar_videojuegos: boolean = true;
  public config: object;

  constructor(){
    this.config = Configuracion;
    this.titulo = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
  }

  ocultarVideojuegos(){
  	this.mostrar_videojuegos = false;
  }

  mostrarVideojuegos(){
  	this.mostrar_videojuegos = true;
  }
}
