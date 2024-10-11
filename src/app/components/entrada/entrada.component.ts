import { Component, OnInit } from '@angular/core';
import EntradaService from '../../services/entrada.service';
import { Entried } from '../../core/interfaces/api.interface';

@Component({
	selector: 'app-entrada',
	standalone: true,
	imports: [],
	templateUrl: './entrada.component.html',
	styleUrl: './entrada.component.scss'
})
export class EntradaComponent implements OnInit
{
	entradas: Entried[] = [];
	constructor(
		private readonly _entradaService: EntradaService
	){}
	ngOnInit(): void
	{
		this._entradaService.getAll.subscribe(data=> this.entradas = data);
	}
}
