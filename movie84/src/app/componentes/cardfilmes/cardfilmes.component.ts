import { Component, OnInit} from '@angular/core';
import { filme } from '../../interfaces/filme';
import { FilmeService } from '../../services/filmes.service';
import { RouterLink } from '@angular/router';



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
      }
    })
  }


}
