import { inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ApiService, JsonResponse } from "./api.service";
import { catchError, map, Observable } from "rxjs";
import { Menu } from "../core/interfaces/api.interface";

@Injectable({
	providedIn: 'root',
})
export default class MenuService extends ApiService
{
	private readonly _http = inject(HttpClient);
	private readonly options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };

	public get getAll() : Observable<Menu[]>
	{
		return this._http.get<JsonResponse>(this.api + "/menu", this.options).pipe(
			map((item)=> item.data),
			catchError((e)=> this.fail(e))
		);
	}
}