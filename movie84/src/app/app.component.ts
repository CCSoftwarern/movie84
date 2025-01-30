import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router} from '@angular/router';
import { HeaderComponent } from "./componentes/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}

