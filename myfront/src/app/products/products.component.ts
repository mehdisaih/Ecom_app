import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Nécessaire pour ngFor

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule], // Inclut CommonModule pour ngFor
})
export class ProductsComponent implements OnInit {
  products: any[] = []; // Initialise les produits comme un tableau vide

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  // Méthode pour charger les produits depuis l'API
  loadProducts(): void {
    this.http.get<any>('http://localhost:8888/INVENTORY-SERVICE/products').subscribe({
      next: (data) => {
        console.log('Données récupérées :', data); // Vérifie les données récupérées
        this.products = data?._embedded?.products || []; // Accède aux produits dans _embedded.products
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des produits :', err);
      },
    });
  }
}
