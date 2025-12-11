import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink], // ¡Importante agregar RouterLink aquí!
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App{

}
