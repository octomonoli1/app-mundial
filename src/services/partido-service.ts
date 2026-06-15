import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Partido } from '../model/partido';

@Injectable({
  providedIn: 'root',
})
export class PartidoService {
  private urlBase: string = "http://localhost:8080/api/partidos";

  constructor(private _http: HttpClient){};

  public findAll(): Observable<Partido[]> {
    return this._http.get<Partido[]>(this.urlBase);
  }
}
