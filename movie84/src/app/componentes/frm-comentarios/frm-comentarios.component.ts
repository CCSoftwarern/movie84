import { Component,  } from '@angular/core';
import {FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
import { ComentariosService } from '../../services/comentarios.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';



@Component({
  selector: 'app-frm-comentarios',
  imports: [FormsModule, ReactiveFormsModule, Toast],
  templateUrl: './frm-comentarios.component.html',
  styleUrl: './frm-comentarios.component.css',
  providers: [MessageService]
})
export class FrmComentariosComponent {
  comentariosForm: FormGroup;
  idfilme: string | null= '0';

  constructor( private router: Router, private servico: ComentariosService, private route: ActivatedRoute, private messageService: MessageService ){
    this.comentariosForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      comentario: new FormControl('', Validators.required)
    })
  }


  onSubmit(): void {

    const nome = this.comentariosForm.value.nome;
    const comentario = this.comentariosForm.value.comentario;

    this.route.paramMap.subscribe((params) => {
      this.idfilme = params.get('id'); // Obtém o id da rota
      if (this.idfilme) {
        // Se o idFilme for válido, faz a requisição
        this.servico.postComentarios(this.idfilme, nome, comentario).subscribe({
          next: (response) => {
            console.log('Resposta da API:', response);
            this.showSucess();
            this.comentariosForm.reset();
            this.reloadPage();
          },
          error: (error) => {
          //console.error('Erro ao salvar o comentário:', error);
          this.showError();
           
          }
        });
      } else {
        console.log('ID do filme não encontrado.');
      }
    });
  }

  reloadPage() {
    window.location.reload();
  };

  showSucess() {
    this.messageService.add({ severity: 'success', summary: 'Successo', detail: 'Comentário adicionado com sucesso!', life: 3000 });
  };
  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erro ao incluir o comentário.', life: 3000 });
  };
    
};

