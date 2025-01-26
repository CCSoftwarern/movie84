import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map,Observable } from "rxjs";
import { filme } from "../../interfaces/filme";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class FilmeService{
    //filmes em cartaz
    private apiURL = environment.apiUrl+'/3/movie/now_playing?language=pt-BR&region=BR';

    constructor(private http: HttpClient){}
    getFilmes(): Observable<filme[]>{
        const headers = new HttpHeaders({ 'Authorization': 'Bearer '+environment.apiKey });

        return this.http.get<filme[]>(this.apiURL, { headers }).pipe(map((response: any) => response.results));
    }


}