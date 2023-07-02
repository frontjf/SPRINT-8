import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiNavesService {
  private apiUrl = 'https://swapi.dev/api/starships';

  constructor(private http: HttpClient) { }

  getNaves(page?: number): Observable<any> {
    let url = 'https://swapi.dev/api/starships/';

    if (page) {
      url += `?page=${page}`;
    }

    return this.http.get(url);
  }

}
