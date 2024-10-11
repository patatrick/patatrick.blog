import { Component, OnInit } from '@angular/core';
import { EntriedDTO, Hashtag } from '../../core/interfaces/api.interface';
import EntradaService from '../../services/entrada.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import HashtagService from '../../services/hashtag.service';
import { forkJoin } from 'rxjs';

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
}
