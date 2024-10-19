import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
	{
		path:"",
		component: HomeComponent
	},
	{
		path:"login",
		component: LoginComponent
	},
	{
		path:"programación-y-desarrollo",
		component: EntradaComponent
	},
	{
		path:"programación-y-desarrollo/:slug",
		component: EntradaComponent
	},
	{
		path:"ciberseguridad",
		component: EntradaComponent
	},
	{
		path:"ciberseguridad/:slug",
		component: EntradaComponent
	},
	{
		path:"ai",
		component: EntradaComponent
	},
	{
		path:"ai/:slug",
		component: EntradaComponent
	},
	{
		path:"diseño-ux-ui",
		component: EntradaComponent
	},
	{
		path:"diseño-ux-ui/:slug",
		component: EntradaComponent
	},
	{
		path:"entretenimiento",
		component: EntradaComponent
	},
	{
		path:"entretenimiento/:slug",
		component: EntradaComponent
	},
	{
		path:"eventos",
		component: EntradaComponent
	},
	{
		path:"eventos/:slug",
		component: EntradaComponent
	},
	{
		path:"programación-para-todos",
		component: EntradaComponent
	},
	{
		path:"programación-para-todos/:slug",
		component: EntradaComponent
	},
];
