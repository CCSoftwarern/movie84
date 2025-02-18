import { Component, OnInit } from '@angular/core';
import { filme } from '../../interfaces/filme';
import { BuscafilmeService } from '../../services/buscafilme.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AlertErrorComponent } from '../alert-error/alert-error.component';
import { LoadingComponent } from "../loading/loading.component";
import { Location, NgOptimizedImage } from '@angular/common';
import { ScrollTop } from 'primeng/scrolltop';

@Component({
  selector: 'app-pesquisafilme',
  imports: [RouterLink, ProgressSpinnerModule, AlertErrorComponent, LoadingComponent,  ScrollTop, NgOptimizedImage],
  templateUrl: './pesquisafilme.component.html',
  styleUrl: './pesquisafilme.component.css'
})
export class PesquisafilmeComponent implements OnInit{

  filmes: filme[] = [];
  nmPesquisa: string | null= '';
  isLoading = false; 
  hasError: any;
  msmErro: string = '';

   constructor(private servico: BuscafilmeService, private route: ActivatedRoute, private location: Location){}


   ngOnInit(): void {
     this.route.paramMap.subscribe((params) => {
       const searchQuery = params.get('nmPesquisa');
       if (searchQuery && searchQuery.trim() !== '') {
         this.nmPesquisa = searchQuery;
         this.onGetBuscaFilmes(this.nmPesquisa);
       } else {
         this.nmPesquisa = 'Não localizado';
       }
     });
   }


  onGetBuscaFilmes(nmPesquisa:string): void {
    this.filmes = [];
    this.isLoading = true;
    this.servico.getBuscaFilmesFilmes(nmPesquisa).subscribe({
      next: (dados) => {
        this.filmes = dados;
        // console.log(dados);
      },
      error: (erro) => {
        this.isLoading = false;
        this.msmErro = erro;
        
      },
      complete: () => {
        this.isLoading = false;
        // console.log('Chamada finalizada');
      }
    })
  }

  goBack(): void {
    this.location.back();
  }

}
