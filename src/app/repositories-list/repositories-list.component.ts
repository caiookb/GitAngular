import { Component, OnInit, Input } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { Repositories } from "../models/Repositories";

import { RepositoriesService } from '../services/repositories.service';

@Component({
  selector: 'app-repositories-list',
  templateUrl: './repositories-list.component.html',
  styleUrls: ['./repositories-list.component.css']
})
export class RepositoriesListComponent implements OnInit {

  @Input()

  repositories: Repositories[] = [];
  selectedRepository: Repositories;

  constructor(private repositoriesService: RepositoriesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.listRepositories();
    console.log("sssssss")

  }

  listRepositories(){
    this.repositoriesService.getRepositories().subscribe(
      repositoriesList => {
        this.repositories = repositoriesList.items;


        console.log(this.repositories)
      }
    )
  }

}
