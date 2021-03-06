import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { COSearchComponent } from './cosearch/cosearch.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ClientComponent } from './register/client/client.component';
import { ContractorComponent } from './register/contractor/contractor.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register/client', component: ClientComponent },
  { path: 'register/contractor', component: ContractorComponent },
  { path: 'search', component: SearchComponent },
  { path: 'cosearch', component: COSearchComponent},
  { path: '', redirectTo: '/landing', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
