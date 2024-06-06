import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LivreListComponent} from "./livre-list/livre-list.component";
import {AuthGuard} from "./auth.guard";
import {LoginComponent} from "./login/login.component";
import {AjoutLivreComponent} from "./ajout-livre/ajout-livre.component";
import {DetailsLivreComponent} from "./details-livre/details-livre.component";
import {EditLivreComponent} from "./edit-livre/edit-livre.component";

const routes: Routes = [
  {path: 'livre', component: LivreListComponent, canActivate: [AuthGuard]},
  {path: 'livre/new', component: AjoutLivreComponent, canActivate: [AuthGuard]},
  {path: 'livre/:id', component: DetailsLivreComponent, canActivate: [AuthGuard]},
  {path: 'livre/:id/edit', component: EditLivreComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
