import { UnsavedGuard } from './unsaved.guard';
import { PreferencesCheckGuard } from './preferences-check.guard';
import { AdminAccessGuard } from './admin-access.guard';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { SuperAdminGuard } from './super-admin.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './admin.guard';
import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchComponent } from './search/search.component';
import { LeadsGridComponent } from './leads/leads-listing/leads-grid/leads-grid.component';
import { ClientsComponent } from './clients/clients.component';
import { ProductComponent } from './product/product.component';

import { AddLoansComponent } from './add-loans/add-loans.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateChild } from '@angular/router';

import { LoansComponent } from './loans/loans.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';


const routes: Routes = [
  { path: 'product/:red', component: ProductComponent },
  { path: 'product/:productId/photos/:photoId', component: ProductComponent },
  {
    path: 'clients',
    component: ClientsComponent,
    canActivate: [AdminGuard, AuthGuard]
    // canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'leads', pathMatch: 'full' },
  { path: 'leads', component: LeadsGridComponent },
  {
    path: 'admin',
    canActivate: [SuperAdminGuard],
    children: [
      {
        path: '',
        component: AdminComponent,
      },
      {
        path: '',
        canActivateChild: [AdminAccessGuard],
        children: [
          {
            path: 'manage',
            component: AdminManageComponent
          },
          {
            path: 'edit',
            component: AdminEditComponent
          },
          {
            path: 'delete',
            component: AdminDeleteComponent
          }
        ]
      }

    ]
  },
  {
    path: 'search',
    component: SearchComponent,
    canDeactivate: [UnsavedGuard]
  },
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
  {
    path: 'preferences',
    canLoad: [PreferencesCheckGuard],
    loadChildren: () => import('./preferences/preferences.module').then(m => m.PreferencesModule)
  },
  { path: '**', component: PageNotFoundComponent } //wildcard route - ESSE SEMPRE TEM QUE VIR POR ÚLTIMO, é tipo o default do switch

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
