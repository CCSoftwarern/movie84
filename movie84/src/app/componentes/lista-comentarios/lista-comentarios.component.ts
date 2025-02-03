import { Component, OnInit } from '@angular/core';
import { Comentario } from '../../interfaces/comentario';
import { ComentariosService } from '../../services/comentarios.service';
import { ActivatedRoute, Route } from '@angular/router';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-comentarios',
  imports: [CommonModule],
  templateUrl: './lista-comentarios.component.html',
  styleUrl: './lista-comentarios.component.css',
  providers: [DatePipe]
})
export class ListaComentariosComponent implements OnInit {

   comentarios: Comentario[] = [];
   idfilme: string | null= '0';
    
  
    constructor(private servico: ComentariosService, private route: ActivatedRoute, private datePipe: DatePipe){}

  
    ngOnInit(): void {
      this.route.paramMap.subscribe((params) => {
        this.idfilme = params.get('id'); // Obtém o id da rota
        if (this.idfilme) {
          // Se o idFilme for válido, faz a requisição
          this.onGetComentarios(this.idfilme);
        } else {
          console.log('ID do filme não encontrado.');
        }
      });
    }
  
   onGetComentarios(id_filme:string): void {
      this.servico.getComentarios(id_filme).subscribe({
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

    reloadPage() {
      window.location.reload();
    }





}
