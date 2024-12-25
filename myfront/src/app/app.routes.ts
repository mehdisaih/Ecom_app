import { Routes } from '@angular/router';

  export const routes: Routes = [
  {
    path: 'products',
    loadComponent: () =>
      import('./products/products.component').then((m) => m.ProductsComponent), // Ajout de la route pour ProductsComponent
  },

    {
      path: 'customers',
      loadComponent: () =>
        import('./customer/customer.component').then((m) => m.CustomerComponent),
    },
    {
      path: 'billing',
      loadComponent: () =>
        import('./billing/billing.component').then((m) => m.BillingComponent),
    },
];


