import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoriesListComponent } from './repositories-list/repositories-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PullRequestsComponent } from './pull-requests/pull-requests.component';


const routes: Routes = [
  { path: '', redirectTo: '/repositories', pathMatch: 'full'},
  { path: 'repositories', component: RepositoriesListComponent },
  { path: 'pullrequests/:login/:repository', component: PullRequestsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routingComponents = 
[NavbarComponent, 
RepositoriesListComponent, 
PullRequestsComponent];