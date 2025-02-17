import { Component, OnInit } from '@angular/core';
import { DetalhefilmeService } from '../../services/detalhefilme.service';
import { Series } from '../../interfaces/serie';
import { ActivatedRoute } from '@angular/router';
import { ListaComentariosComponent } from "../lista-comentarios/lista-comentarios.component";
import { FrmComentariosComponent } from "../frm-comentarios/frm-comentarios.component";
import { Location } from '@angular/common';
import { ScrollTop } from 'primeng/scrolltop';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detalheserie',
  imports: [ListaComentariosComponent, FrmComentariosComponent, ScrollTop, DatePipe],
  templateUrl: './detalheserie.component.html',
  styleUrl: './detalheserie.component.css'
})
export class DetalheserieComponent implements OnInit{
  [x: string]: any;
  detalheSerie: Series | undefined;
 
   idSerie: string | null= '0';
   tipo: string ='';
 
 
   constructor(private servico: DetalhefilmeService, private route: ActivatedRoute, private location: Location){}
   
 
   ngOnInit(): void {
     // Para obter o parâmetro de idFilme da URL
     this.route.paramMap.subscribe((params) => {
       this.idSerie = params.get('id'); // Obtém o id da rota
       if (this.idSerie) {
         // Se o idFserie for válido, faz a requisição
         this.onGetDetalhesSeries(this.idSerie);
       } else {
         console.log('ID da serie não encontrado.');
       }
     });
   }
  
   onGetDetalhesSeries(idSerie: string): void {
     this.servico.getDetalheSeries(idSerie).subscribe({
       next: (dados: Series) => {
         this.detalheSerie = dados;
       //  console.log(dados);
       },
       error: (erro) => {
        // console.log('Erro ao buscar detalhes do filme:', erro);
        alert('Erro na requisição: '+erro);
       },
       complete: () => {
        // console.log('Chamada finalizada');
       }
     });
   }

   goBack(): void {
    this.location.back(); // Navega para a página anterior
  }

}
