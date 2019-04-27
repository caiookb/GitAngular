import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  private url = "https://api.github.com/search/repositories?q=language:Java&sort=stars&page=1";

  constructor(private http: HttpClient) { }

  getRepositories(): Observable<any>{
    return this.http.get<any>(this.url);
  }
}
