import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TemoignageService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:8080/api/temoignages';

  //Liste des Temoignages
  readAllTemoignages() {
    return this.http.get(this.apiUrl);
  }

  /**
   * Détails d'une Temoignage
   * @param id
   */
  readOneTemoignage(id: number) {
    return this.http.get(this.apiUrl + '/' + id);
  }

  /**
   * Ajout d'une Temoignage par l'administrateur
  @param data
  */
  createNewTemoignage(data: object) {
    return this.http.post(this.apiUrl, data);
  }

  /**
   * Mise à jour d'une Temoignage
  @param id
  @param data
  */
  updateTemoignage(id: number, data: object) {
    return this.http.put(this.apiUrl + '/' + id, data);
  }

  /**
   * Suppression d'une Temoignage par l'administrateur
  @param id
  */
  deleteTemoignage(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
