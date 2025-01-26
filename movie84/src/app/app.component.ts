import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./componentes/header/header.component";
import { filme } from '../interfaces/filme';
import { FilmeService } from './services/filmes.service';
import { FooterComponent } from "./componentes/footer/footer.component";
import { CarrocellComponent } from "./componentes/carrocell/carrocell.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CarrocellComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Movie84';
  filmes: filme[] = [];
  isFlipped = false;

  constructor(private servico: FilmeService){}

  ngOnInit(): void {
    this.onGetFilmes();
  }

  onGetFilmes(): void {
    this.servico.getFilmes().subscribe({
      next: (dados) => {
        this.filmes = dados;
        console.log(dados);
      },
      error: (erro) => {
        console.log(erro);
      },
      complete: () => {
        console.log('Chamada finalizada');
        this.show;
      }
    })
  }
  show() {
    
}


}
