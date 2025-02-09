import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { filme } from '../../interfaces/filme';
import { DetalhefilmeService } from '../../services/detalhefilme.service';
import { FrmComentariosComponent } from "../frm-comentarios/frm-comentarios.component";
import { ListaComentariosComponent } from "../lista-comentarios/lista-comentarios.component";
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalhesfilme',
  standalone: true,
  imports: [RouterModule, FrmComentariosComponent, ListaComentariosComponent],
  templateUrl: './detalhesfilme.component.html',
  styleUrls: ['./detalhesfilme.component.css']
})
export class DetalhesfilmeComponent implements OnInit {

  detalheFilme: filme | undefined;

  idFilme: string | null= '0';
  tipo: string ='';


  constructor(private servico: DetalhefilmeService, private route: ActivatedRoute, private location: Location){}
  

  ngOnInit(): void {
    // Inscreve-se para obter o parâmetro de idFilme da URL
    this.route.paramMap.subscribe((params) => {
      this.idFilme = params.get('id'); // Obtém o id da rota
      if (this.idFilme) {
        // Se o idFilme for válido, faz a requisição
        this.onGetDetalhesFilmes(this.idFilme);
      } else {
        console.log('ID do filme não encontrado.');
      }
    });
  }



  onGetDetalhesFilmes(idFilme: string): void {
    this.servico.getDetalheFilme(idFilme).subscribe({
      next: (dados: filme) => {
        this.detalheFilme = dados;
        console.log(dados);
      },
      error: (erro) => {
        console.log('Erro ao buscar detalhes do filme:', erro);
      },
      complete: () => {
        console.log('Chamada finalizada');
      }
    });
  }
  
  goBack(): void {
    this.location.back(); // Navega para a página anterior
  }

}