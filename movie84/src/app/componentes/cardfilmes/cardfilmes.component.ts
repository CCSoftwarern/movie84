import { Component, OnInit} from '@angular/core';
import { filme } from '../../interfaces/filme';
import { FilmeService } from '../../services/filmes.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AlertErrorComponent } from '../alert-error/alert-error.component';
import { LoadingComponent } from "../loading/loading.component";
import { ScrollTop } from 'primeng/scrolltop';
import { NgOptimizedImage } from '@angular/common';




@Component({
  selector: 'app-cardfilmes',
  standalone: true,
  imports: [RouterLink, ProgressSpinnerModule, AlertErrorComponent, LoadingComponent, ScrollTop, NgOptimizedImage],
  templateUrl: './cardfilmes.component.html',
  styleUrls: ['./cardfilmes.component.css'],
})
export class CardfilmesComponent implements OnInit {
  title = 'Movie84';
  filmes: filme[] = [];
  nmLista: string | null= '';
  nmListaTraduzido: string = '';
  isLoading = false; 
  hasError: any;
  msmErro: string = '';
  

  constructor(private servico: FilmeService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.nmLista = params.get('nmlista'); // Obtém o nome da lista
      if (this.nmLista) {
        // Se o idFilme for válido, faz a requisição
        this.onGetFilmes(this.nmLista);
        // como os nomes das categorias são em inglês e pretendo exibir acima do card utilizei o switch após pegar vindo do parametro da rota.
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

  // faço a busta pelo nome que vier na rota
  onGetFilmes(nmLista:string): void {
    this.isLoading = true;
    this.servico.getFilmes(nmLista).subscribe({
      next: (dados) => {
        this.filmes = dados;
        //console.log(dados);
      },
      error: (erro) => {
        //console.log(erro);
        this.isLoading = false;
        this.msmErro = erro;
            
        //alert('Erro a realizara requisição, tente novamente.');
      },
      complete: () => {
        this.isLoading = false;

        // console.log('Chamada finalizada');
      }
    })
  }


}
