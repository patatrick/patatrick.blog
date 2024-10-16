import { Component, OnInit } from '@angular/core';
import EntradaService from '../../services/entrada.service';
import { Entried, EntriedDTO, Hashtag } from '../../core/interfaces/api.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-entrada',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './entrada.component.html',
	styleUrl: './entrada.component.scss'
})
export class EntradaComponent implements OnInit
{
	entrada?: EntriedDTO;
	entradasMismoTipo: EntriedDTO[] = [];
	arrHastag: Hashtag[] = [];
	constructor(
		private readonly _entradaService: EntradaService,
		private readonly _route: ActivatedRoute,
		private readonly _router: Router,
		private readonly _sanitizer: DomSanitizer,
	){}
	ngOnInit(): void
	{
		const slug = this._route.snapshot.paramMap.get('slug');
		console.log(this._router.getCurrentNavigation());
		
		const data = this._router.getCurrentNavigation()!.extras.state! as { entradas: EntriedDTO[], hashgtag: Hashtag[] };
		this.entradasMismoTipo = data.entradas;
		this.arrHastag = data.hashgtag;
		console.log(this.entradasMismoTipo);
		if (!slug) {

			// this._entradaService.getOne(slug).subscribe(data=> this.entrada = data);
			return;
		}
		this._entradaService.getOne(slug).subscribe(data=> this.entrada = data);
	}
	getNombreHashtag(id_hashtag: number) : string
	{
		return id_hashtag + ", ";
		// return this.hashgtag.find(item=>item.id == id_hashtag)!.name;
	}
	sanitizarHTML(htmlString: string)
	{
		return this._sanitizer.bypassSecurityTrustHtml(htmlString);
	}
}
