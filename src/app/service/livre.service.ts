import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Livre} from "../model/livre.model";

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  constructor(private httpClient: HttpClient) {
  }

  getListeLivres(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/livre');
  }

  deleteLivre(id: number): Observable<any> {
    return this.httpClient.delete(`http://localhost:3000/livre/${id}`);
  }

  addLivre(livre: Livre): Observable<any> {
    return this.httpClient.post('http://localhost:3000/livre', livre);
  }

  getLivre(id: number): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/livre/${id}`);
  }

  updateLivre(livre: Livre, id: number): Observable<any> {
    return this.httpClient.put(`http://localhost:3000/livre/${id}`, livre);
  }
}
