import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Necessary for ngFor

@Component({
  selector: 'app-billing',
  standalone: true,
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css'],
  imports: [CommonModule], // Include CommonModule for ngFor
})
export class BillingComponent implements OnInit {
  bills: any[] = []; // Liste des factures
  selectedBill: any = null; // Facture sélectionnée

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadBills();
  }

  // Charger la liste des factures
  loadBills(): void {
    this.http.get<any>('http://localhost:8888/BILLING-SERVICE/bills').subscribe({
      next: (data) => {
        console.log('Data retrieved:', data); // Log les données récupérées
        this.bills = data?._embedded?.bills || []; // Accéder aux factures dans _embedded.bills
      },
      error: (err) => {
        console.error('Error retrieving bills:', err);
      },
    });
  }

  // Charger les détails d'une facture spécifique
  loadBillDetails(billId: string): void {
    this.http.get<any>(`http://localhost:8888/BILLING-SERVICE/bills/${billId}`).subscribe({
      next: (details) => {
        console.log('Bill details retrieved:', details); // Log les détails
        this.selectedBill = details; // Stocker la facture sélectionnée
      },
      error: (err) => {
        console.error('Error retrieving bill details:', err);
      },
    });
  }
}
