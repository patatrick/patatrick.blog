import { Component, inject, OnInit } from '@angular/core';
import { _env } from '../../app.constants';

@Component({
	selector: 'app-aside',
	standalone: true,
	imports: [],
	templateUrl: './aside.component.html',
	styleUrl: './aside.component.scss'
})
export class AsideComponent implements OnInit
{
	paypalme:string = "";
	private env = inject(_env);
	ngOnInit(): void {		
		this.paypalme = this.env.paypalme;
	}
}
