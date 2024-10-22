import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { _env } from '../../app.constants';
import { LoginComponent } from '../login/login.component';
import Session from '../../core/entities/session';
import LoginService from '../../services/login.service';

@Component({
	selector: 'app-nav',
	standalone: true,
	imports: [RouterModule, CommonModule, LoginComponent],
	templateUrl: './nav.component.html',
	styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit
{
	isLoggin : boolean = false;
	loginAuth0 : string = "";
	user = Session.getUserSession;
	constructor(
		private readonly _login: LoginService,
	) {}
	ngOnInit(): void 
	{
		if (Session.getTokenValue) {
			this.isLoggin = true;
		}
		else {
			this.isLoggin = false;
		}
	}
	initSession() : void
	{
		this._login.start();
	}
	exitSession() : void
	{
		this._login.exit();
	}
}
