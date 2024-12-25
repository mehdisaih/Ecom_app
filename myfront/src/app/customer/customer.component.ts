import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Nécessaire pour ngFor

@Component({
  selector: 'app-customers',
  standalone: true,
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  imports: [CommonModule], // Inclut CommonModule pour ngFor
})
export class CustomerComponent implements OnInit {
  customers: any[] = []; // Initialise les customers comme un tableau vide

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  // Méthode pour charger les customers depuis l'API
  loadCustomers(): void {
    this.http.get<any>('http://localhost:8888/CUSTOMER-SERVICE/customers').subscribe({
      next: (data) => {
        console.log('Données récupérées :', data); // Vérifie les données récupérées
        this.customers = data?._embedded?.customers || []; // Accède aux customers dans _embedded.customers
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des customers :', err);
      },
    });
  }
}
