import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { gcModel } from './gc.model';
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GcService {

  public baseUrl = "http://localhost:3002/gc"

  constructor(private http: HttpClient) { }

  public create(gc: gcModel): Observable<gcModel> {
    return this.http.post<gcModel>(this.baseUrl, gc).pipe(
      map((obj) => obj)
      // catchError()
    )  
  }

  public read(): Observable<gcModel[]> {
    return this.http.get<gcModel[]>(this.baseUrl).pipe(
      map((obj) => obj),
    )
  }
}
