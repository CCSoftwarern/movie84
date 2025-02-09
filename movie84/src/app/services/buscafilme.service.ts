
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map,Observable } from "rxjs";
import { filme } from "../interfaces/filme";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BuscafilmeService {  
  
  nmPesquisa:string = '';

  private apiURL = environment.apiUrl;

  constructor(private http: HttpClient){}
  getBuscaFilmesFilmes(nmPesquisa:string): Observable<filme[]>{
      const headers = new HttpHeaders({ 'Authorization': 'Bearer '+environment.apiKey });

      return this.http.get<filme[]>(this.apiURL+ '/3/search/movie?language=pt-BR&region=BR&page=1&query='+nmPesquisa, { headers }).pipe(map((response: any) => response.results));
  }
  


}