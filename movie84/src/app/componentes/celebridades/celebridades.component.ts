import { Component, OnInit } from '@angular/core';
import { Celebridade } from '../../interfaces/celebridade';
import { CelebridadesService } from '../../services/celebridades.service';
import { AlertErrorComponent } from '../alert-error/alert-error.component';
import { LoadingComponent } from "../loading/loading.component";
import { ScrollTop } from 'primeng/scrolltop';
import { NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'app-celebridades',
  standalone: true,
  imports: [AlertErrorComponent, LoadingComponent, ScrollTop, NgOptimizedImage],
  templateUrl: './celebridades.component.html',
  styleUrl: './celebridades.component.css',

})
export class CelebridadesComponent  implements OnInit{
[x: string]: any;
celebridades: Celebridade[] = [];
isLoading = false; 
hasError: any;

constructor(private servico: CelebridadesService){}

  ngOnInit(): void {

        this.onGetSelebridades();
  }

  onGetSelebridades(){
    this.isLoading = true;
    this.servico.getCelebridades().subscribe({
      next: (dados) => {
        this.celebridades= dados;
       // console.log(dados);
      },
      error: (erro) => {
      //  console.log(erro);
        alert('Erro na requisição: '+erro);

      },
      complete: () => {
        this.isLoading = false;
       // console.log('Chamada finalizada');
      }
    })
  }


}
