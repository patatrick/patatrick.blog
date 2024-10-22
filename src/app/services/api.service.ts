import { HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { throwError } from "rxjs";
import { inject } from "@angular/core";
import { _env } from "../app.constants";
import AuthService from "./auth.service";
import Session from "../core/entities/session";

export interface JsonResponse {
	data: any,
	token: string
}
// export class Loader {
// 	static open() {
// 		document.querySelector("#loader")!.classList.add("active");
// 	}
// 	static close() {
// 		document.querySelector("#loader")!.classList.remove("active");
// 	}
// }
export abstract class ApiService
{
	protected readonly api: string;
	private readonly env = inject(_env);
	private readonly headers: { headers: HttpHeaders; };
	constructor()
	{
		this.api = this.env.api;
		this.headers = { 
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + Session.getTokenValue
			})
		};
	}
	protected fail(e : HttpErrorResponse)
	{
		const msg : string = e.error.message===undefined?"Ha fallado la solicitud":e.error.message;
		if (e.status === 500) {
			console.log(msg);
			console.log("Ha ocurrido un error interno, intenta nuevamente!");
		}
		else if(e.status == 0) {
			console.log("status 0:");
			console.log(e);
			// const sVerify = new AuthService(this.api+'/login/active', 0);
			// sVerify.fetchWithRetry().catch(()=> {
			// 	this.cerrarSession();
			// })
		}
		else {
			console.log(msg);
		}
		return throwError(()=> new Error(msg));
	}
}