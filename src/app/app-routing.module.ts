import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListaComponent } from './components/lista/lista.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { ErrorComponent } from './components/error/error.component';
import { AuthGuard } from './guard/auth.guard';
const routes: Routes = [
  { path: "lista", component: ListaComponent, data: {roles: ['ADMIN']}, canActivate: [AuthGuard]},
  { path: "", component: CurrencyComponent, data: {roles: ['USER']}, canActivate: [AuthGuard]},
  { path: "error", component: ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
