import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Déclare ce composant comme standalone
  imports: [RouterOutlet, RouterLink], // Utilise RouterOutlet dans le composant standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrige styleUrl en styleUrls
})
export class AppComponent {
  title = 'myfront';
}
