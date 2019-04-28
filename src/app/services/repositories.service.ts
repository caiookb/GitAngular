import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { Repositories } from "../models/Repositories";


@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  page: number = 1;

  private url = "https://api.github.com/search/repositories?q=language:Java&sort=stars&page=";
  private pulls = "https://api.github.com"; 
  
  //iluwatar/java-design-patterns/pulls

  constructor(private http: HttpClient) { }

  getRepositories(page: number): Observable<any>{
    return this.http.get<any>(this.url + page);
  }

  getRepository(login: string, repository: string){
    return this.http.get(`${this.pulls}/repos/${login}/${repository}/pulls`);
  }

}
