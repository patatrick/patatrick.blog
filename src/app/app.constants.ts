import { InjectionToken } from '@angular/core';
export interface AppConstante {
	api: string;
	repo: string;
	paypalme: string;
	timeout: number;
	environment: string;
}
export const _env = new InjectionToken<AppConstante>('app.config');
export const _env_value: AppConstante = {
	api: "http://localhost:80/patatrick.api.blog",
	repo: "https://repositorio.holapatrick.com/blog",
	paypalme: "https://www.paypal.com/paypalme/patatrick1",
	timeout: 3000,
	environment: 'production'
};