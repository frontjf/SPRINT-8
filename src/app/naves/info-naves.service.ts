import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoNavesService {
  private baseUrl = 'https://swapi.dev/api';

  constructor(private http: HttpClient) { }

  getNaves(): Observable<any> {
    return this.http.get(`${this.baseUrl}/starships`);
  }

  getNavesPorPagina(page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/starships?page=${page}`);
  }

  getNavePorId(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/starships/${id}`);
  }
  
}
