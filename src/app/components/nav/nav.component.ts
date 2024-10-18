import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import LoginService from '../../services/login.service';

@Component({
	selector: 'app-nav',
	standalone: true,
	imports: [RouterModule, CommonModule],
	templateUrl: './nav.component.html',
	styleUrl: './nav.component.scss'
})
export class NavComponent
{
	isLoggin = false;
	constructor(
		private readonly _router: Router,
		private readonly _login: LoginService,
	) {}
	Registrate() : void
	{
		this._login.getUrl.subscribe(data=> {
			if (data.status != 200) return;
			location.href = data.redirect;
		})
	}

}
