import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map,Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Comentario } from '../interfaces/comentario';


@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

private apiURL = environment.apiXano+'/tb_comentarios';

    constructor(private http: HttpClient){}
    getComentarios(): Observable<Comentario[]>{
        return this.http.get<Comentario[]>(this.apiURL).pipe(map((response: any) => response));
    }
  }
