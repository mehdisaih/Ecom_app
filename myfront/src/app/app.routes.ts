import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    loadComponent: () =>
      import('./products/products.component').then((m) => m.ProductsComponent), // Route pour ProductsComponent
  },
  {
    path: 'customers',
    loadComponent: () =>
      import('./customer/customer.component').then((m) => m.CustomerComponent), // Route pour CustomerComponent
  },
  {
    path: 'billing',
    loadComponent: () =>
      import('./billing/billing.component').then((m) => m.BillingComponent), // Route pour BillingComponent
  },
  {
    path: '**',
    redirectTo: '', // Redirection vers la page d'accueil si la route est inconnue
  },
];
