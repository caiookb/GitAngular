import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Repositories } from "../models/Repositories";
import { RepositoriesService} from '../services/repositories.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pull-requests',
  templateUrl: './pull-requests.component.html',
  styleUrls: ['./pull-requests.component.css']
})
export class PullRequestsComponent implements OnInit {

  @Input()
  repository;

  

  constructor(private repositoriesService: RepositoriesService, private route: ActivatedRoute, private location: Location) { }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      const login = params['login'];
      const repository = params['repository']
      this.repositoriesService.getRepository(login, repository).subscribe(repository => this.repository = repository);
    })
  }

  goBack(): void{
    this.location.back();
  }

}
