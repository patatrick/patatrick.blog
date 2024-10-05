import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Menu } from './core/interfaces/api.interface';
import MenuService from './services/menu.service';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, CommonModule, RouterModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit
{
	menu: Menu[] = [];
	constructor(
		private readonly _menuService: MenuService,
		private readonly sanitizer: DomSanitizer
	) {}
	ngOnInit(): void
	{
		this._menuService.getAll.subscribe(data=> this.menu = data);
		initFlowbite();
	}
	sanitizarHTML(htmlString: string)
	{
		return this.sanitizer.bypassSecurityTrustHtml(htmlString);
	}
}
