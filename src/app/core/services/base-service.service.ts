import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environmentDev} from '../../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private baseUrl: string = environmentDev.baseUrl;
  constructor(private http: HttpClient) { }

  connexion(endPoint: string,data: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/${endPoint}`,data)
  }
  getOne(endPoint: string, id: string) : Observable<any>{
    return this.http.get(`${this.baseUrl}/${endPoint}/${id}`);
  }
  getOneBySlug(endPoint: string, slug: string) : Observable<any>{
    return this.http.get(`${this.baseUrl}/${endPoint}/${slug}`);
  }
  getAll(endPoint: string, id?: any): Observable<any>{
    return id !== null
      ? this.http.get(`${this.baseUrl}/${endPoint}/${id}`)
      : this.http.get(`${this.baseUrl}/${endPoint}`);
  }
  create(endPoint: string, data: any, item?: any): Observable<any>{
    return item !== null
      ? this.http.post(`${this.baseUrl}/${endPoint}/${item}`, data)
      : this.http.post(`${this.baseUrl}/${endPoint}`, data);
  }
  // create(endPoint: string, data: any): Observable<any>{
  //     return  this.http.post(`${this.baseUrl}/${endPoint}`, data);
  // }
  // createById(endPoint: string, data: any, item: any): Observable<any>{
  //   return this.http.post(`${this.baseUrl}/${endPoint}/${item}`, data);
  // }
  update(endPoint: string, data: any, id: string): Observable<any>{
    return this.http.put(`${this.baseUrl}/${endPoint}/${id}`, data);
  }
  delete(endPoint: string, id: string): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${endPoint}/${id}`);
  }
}
