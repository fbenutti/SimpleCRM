import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchComponent } from './search/search.component';
import { LeadsGridComponent } from './leads/leads-listing/leads-grid/leads-grid.component';
import { ClientsComponent } from './clients/clients.component';
import { ProductComponent } from './product/product.component';

import { AddLoansComponent } from './add-loans/add-loans.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoansComponent } from './loans/loans.component';


const routes: Routes = [
  { path: 'product/:red', component: ProductComponent  },
  { path: 'product/:productId/photos/:photoId', component: ProductComponent  },
  {
    path: 'clients',
    component: ClientsComponent,
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'leads', pathMatch: 'full'},
  { path: 'leads', component: LeadsGridComponent },
  { path: 'search', component: SearchComponent },
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
  { path: '**', component: PageNotFoundComponent} //wildcard route - ESSE SEMPRE TEM QUE VIR POR ÚLTIMO, é tipo o default do switch

];
  // //we will create all our routes here
  // {
  //   path: 'loans',
  //   component: LoansComponent
  // },
  // {
  //   path: 'add',
  //   component: AddLoansComponent,
  //   // outlet: 'addLoan'
  // },
  // {
  //   path: 'loan-types',
  //   //component: LoanTypesComponent,
  //   children: [
  //     {
  //       path: 'add-loan',
  //       component: AddLoansComponent,

  //     }
  //   ]

  // }


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
