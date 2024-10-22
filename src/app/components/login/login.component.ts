import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import LoginService from '../../services/login.service';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [],
	template: ""
})
export class LoginComponent implements OnInit
{
	constructor(
		private readonly _route: ActivatedRoute,
		private readonly _login: LoginService,
	) {}
	ngOnInit(): void
	{
		const code = this._route.snapshot.queryParamMap.get('code');
		const state = this._route.snapshot.queryParamMap.get('state');
		if (!code || !state) {
			location.href = "";
			return;
		};
		this._login.getUser(code, state).subscribe(()=> location.href = "");
	}
}
