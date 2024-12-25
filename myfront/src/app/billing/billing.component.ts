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
  bills: any[] = []; // Initialize bills as an empty array

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadBills();
  }

  // Method to load bills from the API
  loadBills(): void {
    this.http.get<any>('http://localhost:8888/BILLING-SERVICE/bills').subscribe({
      next: (data) => {
        console.log('Data retrieved:', data); // Check the retrieved data
        this.bills = data?._embedded?.bills || []; // Access bills in _embedded.bills
      },
      error: (err) => {
        console.error('Error retrieving bills:', err);
      },
    });
  }



}
