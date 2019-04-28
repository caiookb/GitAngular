import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Repositories, RepositoryObj} from "../models/Repositories";
import { RepositoriesService} from '../services/repositories.service';


@Component({
  selector: 'app-repositories-list',
  templateUrl: './repositories-list.component.html',
  styleUrls: ['./repositories-list.component.css']
})
export class RepositoriesListComponent implements OnInit {

  @Input()

  repositories: Repositories[] = [];
  allRepositories: Repositories[] = [];
  
  selectedRepository: Repositories;
  page: number = 1;

  constructor(private repositoriesService: RepositoriesService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.getRep();
  }

  getRep() {
    console.log(this.page);
    this.repositoriesService.getRepositories(this.page).subscribe(res => this.onSuccess(res.items));
  }

  onSuccess(res) {
    console.log(res);
    if(res != undefined){
      res.forEach(item =>{
        this.repositories.push( new RepositoryObj(item));
      });
    }
  }

  onScroll() {
    console.log("Scrolled");
    this.page = this.page + 1;
    this.getRep();
  }
}
