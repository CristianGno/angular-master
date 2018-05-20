import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
	selector: 'videojuego',
	templateUrl: './videojuego.component.html'
})

export class VideoJuegoComponent implements OnInit, DoCheck, OnDestroy {

	public titulo:string;
	public lista: string;

	constructor(){
		this.titulo = "Componente de videojuegos";
		this.lista = "Listado de los videojuegos más populares";
		
		console.log('Se ha cargado el componente');
	}

	ngOnInit() {
		console.log('OnInit');
	}

	ngDoCheck() {
		console.log("Docheck ejecutado")
	}

	ngOnDestroy(){
		console.log("OnDestroy ejecutado")
	}

	cambiarTitulo(){
		this.titulo = "Nuevo título del componente de Videojuegos";
	}
}
