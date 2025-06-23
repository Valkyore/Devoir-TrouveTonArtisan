import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Artisan {
  id: number;
  name: string;
  specialty: string;
  note: number;
  location: string;
  about: string;
  email: string;
  website: string;
  category: string;
  top: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class ArtisansService {
  private _url: string ="assets/data/datas.json"

  constructor(private http: HttpClient) { }

   getArtisan(): Observable<Artisan[]> {
    return this.http.get<Artisan[]>(this._url);
  }
}