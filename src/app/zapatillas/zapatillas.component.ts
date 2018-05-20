import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
	selector: 'zapatillas',
	templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit {

	public titulo:string;
	public zapatillas: Array<Zapatilla>;

	constructor(){
		this.titulo = "Componente de zapatillas";

		this.zapatillas = [
			new Zapatilla("Nike air", 12000, "Nike", "Blanco", true),
			new Zapatilla("Reebook Classic", 120000, "Reebok", "Azul", true),
			new Zapatilla("Stan Smith", 120000, "Adidas", "Negros", true),
		];
	}

	ngOnInit(){
		console.log(this.zapatillas)
	}
}