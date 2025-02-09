import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map,Observable } from "rxjs";
import { filme } from "../interfaces/filme";
import { environment } from "../../environments/environment";
import { Series } from '../interfaces/series';

@Injectable({
  providedIn: 'root'
})
export class DetalhefilmeService {

  private apiURL = environment.apiUrl;

    constructor(private http: HttpClient){}

    getDetalheFilme(id:string): Observable<filme>{
      const headers = new HttpHeaders({ 'Authorization': 'Bearer '+environment.apiKey });

      return this.http.get<filme>(this.apiURL+'/3/movie/'+id+'?language=pt-BR', { headers });
  }

    getDetalheSeries(id:string): Observable<Series>{
      const headers = new HttpHeaders({ 'Authorization': 'Bearer '+environment.apiKey });

      return this.http.get<Series>(this.apiURL+'/3/tv/'+id+'?language=pt-BR', { headers });
    }



}
