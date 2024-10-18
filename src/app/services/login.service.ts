import { inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ApiService, JsonResponse } from "./api.service";
import { catchError, map, Observable } from "rxjs";
import { User } from "../core/interfaces/api.interface";

interface LoginRedirect
{
	status: number;
	redirect: string;
}
@Injectable({
	providedIn: 'root',
})
export default class LoginService extends ApiService
{
	private readonly uri: string = this.api + "/login";
	private readonly _http = inject(HttpClient);
	private readonly options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };

	public get getUrl() : Observable<LoginRedirect>
	{
		return this._http.get<JsonResponse>(this.uri, this.options).pipe(
			map((item)=> item.data),
			catchError((e)=> this.fail(e))
		)
	}
}