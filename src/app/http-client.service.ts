import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  BASE_URL = 'localhost:8080'
  DEFAULT_HEADER = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers':
        'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
    })
  }

  constructor(private http: HttpClient) { }

  get(url: String){
    return this.http.get<any>(`/api/${url}`, this.DEFAULT_HEADER);
  }
}
