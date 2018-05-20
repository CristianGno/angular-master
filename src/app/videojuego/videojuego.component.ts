import { Component } from '@angular/core';

@Component({
	selector: 'videojuego',
	templateUrl: './videojuego.component.html'
})

export class VideoJuegoComponent {

	public titulo:string;
	public lista: string;

	constructor(){
		this.titulo = "Componente de videojuegos";
		this.lista = "Listado de los videojuegos más populares";
		
		console.log('Se ha cargado el componente');
	}
}