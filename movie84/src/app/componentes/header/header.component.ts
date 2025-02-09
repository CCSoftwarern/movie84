import { Component } from '@angular/core';
import { RouterLink , Router} from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';




@Component({
  selector: 'app-header',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  frmPesquisa:FormGroup;

  constructor(private router:Router,){
    this.frmPesquisa = new FormGroup({
      nmPesquisa: new FormControl('',[Validators.required]),
    })
  }

  onSubmit(){
    // alert(this.frmPesquisa.value.nmPesquisa);
    if (this.frmPesquisa.value.nmPesquisa.trim()) {
      // Garante que a pesquisa não seja vazia ou apenas espaços em branco
      this.router.navigate([`/pesquisafilme/${this.frmPesquisa.value.nmPesquisa}`]); 
    } else {
      // Caso o campo esteja vazio, pode redirecionar para uma página padrão ou exibir mensagem de erro
      alert('Por favor, insira um termo para pesquisa.');
    }
  }


}