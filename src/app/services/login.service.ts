import { inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ApiService, JsonResponse } from "./api.service";
import { catchError, map, Observable } from "rxjs";
import { User } from "../core/interfaces/api.interface";

@Injectable({
	providedIn: 'root',
})
export default class LoginService extends ApiService
{
	private readonly uri: string = this.api + "/login";
	private readonly _http = inject(HttpClient);
	private readonly options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };

	public getUser(code: string, state: string) : Observable<User>
	{
		return this._http.get<JsonResponse>(this.uri + `/code/${code}/state/${state}`, this.options).pipe(
			map((item)=> {
                this.setTokenValue = item.token;
                return item.data
            }),
			catchError((e)=> this.fail(e))
		)
	}
}