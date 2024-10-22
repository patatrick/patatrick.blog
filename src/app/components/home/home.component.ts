import { Component, OnInit } from '@angular/core';
import { EntriedDTO, Hashtag, Menu } from '../../core/interfaces/api.interface';
import EntradaService from '../../services/entrada.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import HashtagService from '../../services/hashtag.service';
import { forkJoin } from 'rxjs';
import Session from '../../core/entities/session';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [CommonModule, RouterLink],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit
{
	entradas: EntriedDTO[] = [];
	hashgtag: Hashtag[] = [];
	constructor(
		private readonly _entradaService: EntradaService,
		private readonly _hashtagService: HashtagService,
		private readonly _router: Router,
	){}
	ngOnInit(): void
	{
		forkJoin([this._entradaService.getAll, this._hashtagService.getAll]).subscribe(
			data=> {
				this.entradas = data[0];
				this.hashgtag = data[1];
			}
		);
	}
	getNombreHashtag(id_hashtag: number) : string
	{
		return this.hashgtag.find(item=>item.id == id_hashtag)!.name;
	}
	irEntrada(slug: string, event: Event) : void
	{
		event.preventDefault();
		const id_menu = this.entradas.find(item=>item.slug == slug)!.id_menu;
		const menuActual = Session.getMenu.find(m=>m.id == id_menu)!;
		this._router.navigate([`${ menuActual.slug }/${ slug }`]);
	}
}
