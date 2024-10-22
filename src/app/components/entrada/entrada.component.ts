import { Component, OnInit } from '@angular/core';
import EntradaService from '../../services/entrada.service';
import { Entried, EntriedDTO, Hashtag, Menu } from '../../core/interfaces/api.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import HashtagService from '../../services/hashtag.service';
import { forkJoin } from 'rxjs';
import Session from '../../core/entities/session';

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
	slug:  string | null = null;

	constructor(
		private readonly _entradaService: EntradaService,
		private readonly _hashtagService: HashtagService,
		private readonly _route: ActivatedRoute,
		private readonly _router: Router,
		private readonly _sanitizer: DomSanitizer,
	){}
	ngOnInit(): void
	{
		const pathPrincipal = this._route.snapshot.url[0].path;
		const menu = Session.getMenu.find(m=>m.slug == "/"+pathPrincipal)!;
		forkJoin([this._entradaService.getAllMismoTipo(menu.id), this._hashtagService.getAll]).subscribe(
			data=> {
				this.entradasMismoTipo = data[0];
				this.arrHastag = data[1];
			}
		);
		this.slug = this._route.snapshot.paramMap.get('slug');
		this.slug ? this.entradaOne(menu) : this.entradaAll(menu);
	}
	sanitizarHTML(htmlString: string)
	{
		return this._sanitizer.bypassSecurityTrustHtml(htmlString);
	}
	getNombreHashtag(id_hashtag: number) : string
	{
		return this.arrHastag.find(item=>item.id == id_hashtag)!.name;
	}
	irEntrada(slug: string, event: Event) : void
	{
		event.preventDefault();
		const id_menu = this.entradasMismoTipo.find(item=>item.slug == slug)!.id_menu;
		const menuActual = Session.getMenu.find(m=>m.id == id_menu)!;
		this._router.navigate([`${ menuActual.slug }/${ slug }`]);
	}
	private entradaOne(menu: Menu) : void
	{
		this._entradaService.getOne(this.slug!).subscribe(data=> this.entrada = data);
	}
	private entradaAll(menu: Menu) : void
	{

	}
}
