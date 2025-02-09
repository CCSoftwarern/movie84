import { Component, OnInit } from '@angular/core';
import { Series } from '../../interfaces/series';
import { SeriesService } from '../../services/series.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlertErrorComponent } from "../alert-error/alert-error.component";
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [RouterLink, AlertErrorComponent, LoadingComponent],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent implements OnInit {
  title = 'Movie84';
  series: Series[] = [];
  nmListaSeries: string | null= '';
  nmListaTraduzido: string = '';
hasError: any;
isLoading: any;

  

  constructor(private servico: SeriesService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.nmListaSeries = params.get('nmlistaSeries'); // Obtém o nome da lista
      if (this.nmListaSeries) {
        // Se o idFilme for válido, faz a requisição
        this.onGetSeries(this.nmListaSeries);
        switch (this.nmListaSeries) {
          case 'airing_today':
            this.nmListaTraduzido="Indo ao ar hoje";
            break;
          case 'on_the_air':
            this.nmListaTraduzido="no ar";
            break;
          case 'popular':
            this.nmListaTraduzido="Popular";
            break;
          case 'top_rated':
            this.nmListaTraduzido="Melhor avaliado";
          break;
          default:
            this.nmListaTraduzido="Não localizado";
        }
      } else {
        this.nmListaTraduzido="Não localizado";
      }
    });
  }

  onGetSeries(nmListaSeries:string): void {
    this.servico.getSeries(nmListaSeries).subscribe({
      next: (dados) => {
        this.series = dados;
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
