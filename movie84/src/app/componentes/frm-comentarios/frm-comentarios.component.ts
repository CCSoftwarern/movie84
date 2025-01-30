import { Component,  } from '@angular/core';
import {FormsModule, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frm-comentarios',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './frm-comentarios.component.html',
  styleUrl: './frm-comentarios.component.css'
})
export class FrmComentariosComponent {
  comentariosForm: FormGroup;

  constructor( router:Router){
    this.comentariosForm = new FormGroup({
      name: new FormGroup(''),
    })
  }

  onSubmit():void{
    alert(this.comentariosForm.value);

  }
}
