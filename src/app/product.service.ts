import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';




@Injectable()
export class ProductService {

  constructor(private _http: Http) { }
  private _albumUrl: string = '../assets/album.json'
  getAlbum(id: number): Observable<any> {
    return this._http.get(this._albumUrl).map((response) => <any>response.json());

  }

}
