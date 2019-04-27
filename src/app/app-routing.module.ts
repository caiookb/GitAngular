import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoriesListComponent } from './repositories-list/repositories-list.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  { path: '', redirectTo: '/repositories', pathMatch: 'full'},
  { path: 'repositories', component: RepositoriesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routingComponents = 
[NavbarComponent, 
RepositoriesListComponent];