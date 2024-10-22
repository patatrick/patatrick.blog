import { inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ApiService, JsonResponse } from "./api.service";
import { catchError, map, Observable } from "rxjs";
import Session from "../core/entities/session";

@Injectable({
	providedIn: 'root',
})
export default class LoginService extends ApiService
{
	private readonly uri: string = this.api + "/login";
	private readonly _http = inject(HttpClient);
	private readonly options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };

	public start()  : void
	{
		window.location.href = this.uri;
	}
	public exit()  : void
	{
		Session.cerrarSession();
		window.location.href = this.uri + "/logout";
	}
	public getUser(code: string, state: string) : Observable<boolean>
	{
		return this._http.get<JsonResponse>(this.uri + `/code/${code}/state/${state}`, this.options).pipe(
			map((item)=> {
				Session.setTokenValue = item.token;
				Session.setUserSession = item.data;
				return true
			}),
			catchError((e)=> this.fail(e))
		)
	}
}