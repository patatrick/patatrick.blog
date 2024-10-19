import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { _env } from '../../app.constants';
import { LoginComponent } from '../login/login.component';

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
	rutaLogin : string = "";

	constructor()
	{
		this.rutaLogin = inject(_env).api + "/login";
		if (localStorage.getItem("token")) {
			this.isLoggin = true;
		}
		else {
			this.isLoggin = false;
		}
	}
	ngOnInit(): void 
	{
		// setTimeout(() => {
		// 	if (localStorage.getItem("token")) {
		// 		this.isLoggin = true;
		// 	}
		// 	else {
		// 		this.isLoggin = false;
		// 	}
		// }, 1000);
	}
}
