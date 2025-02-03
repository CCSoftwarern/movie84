import { Component, OnInit} from '@angular/core';
import { filme } from '../../interfaces/filme';
import { FilmeService } from '../../services/filmes.service';
import { ActivatedRoute, RouterLink } from '@angular/router';



@Component({
  selector: 'app-cardfilmes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cardfilmes.component.html',
  styleUrls: ['./cardfilmes.component.css'],
})
export class CardfilmesComponent implements OnInit {
  title = 'Movie84';
  filmes: filme[] = [];
  nmLista: string | null= '';
  nmListaTraduzido: string = '';
  

  constructor(private servico: FilmeService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.nmLista = params.get('nmlista'); // Obtém o nome da lista
      if (this.nmLista) {
        // Se o idFilme for válido, faz a requisição
        this.onGetFilmes(this.nmLista);
        switch (this.nmLista) {
          case 'now_playing':
            this.nmListaTraduzido="Em cartaz";
            break;
          case 'popular':
            this.nmListaTraduzido="Popular";
            break;
          case 'top_rated':
            this.nmListaTraduzido="Melhor avaliado";
            break;
          case 'upcoming':
            this.nmListaTraduzido="Por vir";
          break;
          default:
            this.nmListaTraduzido="Não localizado";
        }
      } else {
        this.nmListaTraduzido="Não localizado";
      }
    });
  }

  onGetFilmes(nmLista:string): void {
    this.servico.getFilmes(nmLista).subscribe({
      next: (dados) => {
        this.filmes = dados;
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
