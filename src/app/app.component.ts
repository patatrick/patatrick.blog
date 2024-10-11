import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './components/aside/aside.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavComponent } from './components/nav/nav.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, CommonModule, RouterModule, AsideComponent, SidebarComponent, NavComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit
{
	ngOnInit(): void
	{
		initFlowbite();
	}
}
