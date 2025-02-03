import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map,Observable } from "rxjs";
import { filme } from "../interfaces/filme";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class FilmeService{
    //filmes em cartaz
    nmLista:string = '';
    private apiURL = environment.apiUrl;

    constructor(private http: HttpClient){}
    getFilmes(nmLista:string): Observable<filme[]>{
        const headers = new HttpHeaders({ 'Authorization': 'Bearer '+environment.apiKey });

        return this.http.get<filme[]>(this.apiURL+ '/3/movie/'+nmLista+'?language=pt-BR&region=BR', { headers }).pipe(map((response: any) => response.results));
    }

    


}