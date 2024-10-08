import { InjectionToken } from '@angular/core';
export interface AppConstante {
	api: string;
	repo: string;
	timeout: number;
	environment: string;
}
export const _env = new InjectionToken<AppConstante>('app.config');
export const _env_value: AppConstante = {
	api: "http://localhost:8080/patatrick.api.blog",
	repo: "https://repositorio.holapatrick.com/blog",
	timeout: 3000,
	environment: 'production'
};