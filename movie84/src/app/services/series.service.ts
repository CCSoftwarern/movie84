import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map,Observable } from "rxjs";
import { Series } from "../interfaces/series";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class SeriesService{
    nmListaSeries:string = '';
    private apiURL = environment.apiUrl;

    constructor(private http: HttpClient){}
    getSeries(nmListaSerie:string): Observable<Series[]>{
        const headers = new HttpHeaders({ 'Authorization': 'Bearer '+environment.apiKey });
        return this.http.get<Series[]>(this.apiURL+ '/3/tv/'+nmListaSerie+'?language=pt-BR&region=BR', { headers }).pipe(map((response: any) => response.results));
    }
    

}