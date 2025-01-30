import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map,Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Comentario } from '../interfaces/comentario';


@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

private apiURL = environment.apiXano+'/tb_comentarios?id_filme=';

    constructor(private http: HttpClient){}
      // buscar comentários de acordo com o ID do  filme

    getComentarios(id_filme:string): Observable<Comentario[]>{
        return this.http.get<Comentario[]>(this.apiURL+id_filme).pipe(map((response: any) => response));
    }

      // gravar os comentário na API Xano
    postComentarios(id_filme:string,nmPessoa:string, comentario:string): Observable<Comentario>{

      const body = {
        id_filme: id_filme,
        nmPessoa: nmPessoa,
        comentario: comentario
        
      };

      return this.http.post<Comentario>(this.apiURL + id_filme, body).pipe(
        map(response => response) 
      );
  }


  }
