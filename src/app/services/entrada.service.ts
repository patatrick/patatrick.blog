import { inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ApiService, JsonResponse } from "./api.service";
import { catchError, map, Observable } from "rxjs";
import { EntriedDTO } from "../core/interfaces/api.interface";

@Injectable({
	providedIn: 'root',
})
export default class EntradaService extends ApiService
{
	private readonly uri: string = this.api + "/entried";
	private readonly _http = inject(HttpClient);
	private readonly options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };

	public get getAll() : Observable<EntriedDTO[]>
	{
		return this._http.get<JsonResponse>(this.uri, this.options).pipe(
			map((item)=> item.data),
			catchError((e)=> this.fail(e))
		);
	}

	public getOne(slug: string) : Observable<EntriedDTO>
	{
		return this._http.get<JsonResponse>(this.uri + "/slug/"+ slug, this.options).pipe(
			map((item)=> item.data),
			catchError((e)=> this.fail(e))
		);
	}
}