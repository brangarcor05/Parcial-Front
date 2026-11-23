import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bodega, BodegaRequest } from '../models/bodega';

@Injectable({ providedIn: 'root' })
export class BodegaService {
  private readonly api = 'http://localhost:8084/bodegas';

  constructor(private http: HttpClient) {}

  listar(): Observable<Bodega[]> {
    return this.http.get<Bodega[]>(this.api);
  }

  registrar(data: BodegaRequest): Observable<Bodega> {
    return this.http.post<Bodega>(this.api, data);
  }
}