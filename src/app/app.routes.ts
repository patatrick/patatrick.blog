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
	{
		path:"programación-y-desarrollo",
		component: EntradaComponent
	},
	{
		path:"ciberseguridad",
		component: EntradaComponent
	},
	{
		path:"ai",
		component: EntradaComponent
	},
	{
		path:"diseño-ux-ui",
		component: EntradaComponent
	},
	{
		path:"entretenimiento",
		component: EntradaComponent
	},
	{
		path:"eventos",
		component: EntradaComponent
	},
	{
		path:"programación-para-todos",
		component: EntradaComponent
	},
];
