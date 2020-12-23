import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AstuceService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:8080/api/astuces';

  //Liste des astuces
  readAllAstuces() {
    return this.http.get(this.apiUrl);
  }

  /**
   * Détails d'une astuce
   * @param id
   */
  readOneAstuce(id: number) {
    return this.http.get(this.apiUrl + '/' + id);
  }

  /**
   * Ajout d'une astuce par l'administrateur
  @param data
  */
  createNewAstuce(data: object) {
    return this.http.post(this.apiUrl, data);
  }

  /**
   * Mise à jour d'une astuce par l'administrateur
  @param id
  @param data
  */
  updateAstuce(id: number, data: object) {
    return this.http.put(this.apiUrl + '/' + id, data);
  }

  /**
   * Suppression d'une astuce par l'administrateur
  @param id
  */
  deleteAstuce(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
