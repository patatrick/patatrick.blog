import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Menu } from '../../core/interfaces/api.interface';
import MenuService from '../../services/menu.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-sidebar',
	standalone: true,
	imports: [CommonModule, RouterModule],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit
{
	isLoggin = false;
	menu: Menu[] = [];
	constructor(
		private readonly _menuService: MenuService,
		private readonly sanitizer: DomSanitizer
	) {}
	ngOnInit(): void
	{
		this._menuService.getAll.subscribe(data=> this.menu = data);
	}
	sanitizarHTML(htmlString: string)
	{
		return this.sanitizer.bypassSecurityTrustHtml(htmlString);
	}
}
