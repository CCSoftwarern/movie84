import { Component } from '@angular/core';


@Component({
  selector: 'app-alert-error',
  imports: [],
  templateUrl: './alert-error.component.html',
  styleUrl: './alert-error.component.css'
})
export class AlertErrorComponent {

  atualizarPagina(): void {
    window.location.reload(); // Navega para a página anterior
  }

}
