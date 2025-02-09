import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map,Observable } from "rxjs";
import { Celebridade } from '../interfaces/celebridade';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CelebridadesService {    //Celebridades
    private apiURL = environment.apiUrl;

    constructor(private http: HttpClient){}
    getCelebridades(): Observable<Celebridade[]>{
        const headers = new HttpHeaders({ 'Authorization': 'Bearer '+environment.apiKey });

        return this.http.get<Celebridade[]>(this.apiURL+ '/3/person/popular?language=pt-BR&region=BR', { headers }).pipe(map((response: any) => response.results));
    }
    
}
