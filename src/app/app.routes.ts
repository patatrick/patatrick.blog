import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EntradaComponent } from './components/entrada/entrada.component';

export const routes: Routes = [
	{
		path:"",
		component: HomeComponent
	},
	{
		path:"entrada",
		component: EntradaComponent
	},
];
