import { Component, OnInit } from '@angular/core';
import { Comentario } from '../../interfaces/comentario';
import { ComentariosService } from '../../services/comentarios.service';

@Component({
  selector: 'app-lista-comentarios',
  imports: [],
  templateUrl: './lista-comentarios.component.html',
  styleUrl: './lista-comentarios.component.css'
})
export class ListaComentariosComponent implements OnInit {

   comentarios: Comentario[] = [];
    
  
    constructor(private servico: ComentariosService){}
  
    ngOnInit(): void {
      this.onGetComentarios();
    }
  
    onGetComentarios(): void {
      this.servico.getComentarios().subscribe({
        next: (dados) => {
          this.comentarios = dados;
          console.log(dados);
        },
        error: (erro) => {
          console.log(erro);
        },
        complete: () => {
          console.log('Chamada finalizada');
        }
      })
    }

}
