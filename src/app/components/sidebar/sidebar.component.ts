import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Menu } from '../../core/interfaces/api.interface';
import MenuService from '../../services/menu.service';
import { DomSanitizer } from '@angular/platform-browser';
import Session from '../../core/entities/session';

@Component({
	selector: 'app-sidebar',
	standalone: true,
	imports: [CommonModule, RouterModule],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit
{
	@Output() menuEmit: EventEmitter<Menu[]> = new EventEmitter();
	isLoggin = false;
	menu: Menu[] = [];
	constructor(
		private readonly _menuService: MenuService,
		private readonly sanitizer: DomSanitizer
	) {}
	ngOnInit(): void
	{
		if (Session.getMenu.length == 0) {
			this._menuService.getAll.subscribe(data=>{
				this.menu = data;
				this.menuEmit.emit(this.menu);
			});
		}
		else {
			this.menu = Session.getMenu;
			this.menuEmit.emit(this.menu);
		}
	}
	sanitizarHTML(htmlString: string)
	{
		return this.sanitizer.bypassSecurityTrustHtml(htmlString);
	}
}
