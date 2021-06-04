import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { MemberModel } from './member.model';
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private baseUrl = "http://localhost:3001/members"

  constructor(private http: HttpClient) { }

  public create(member: MemberModel): Observable<MemberModel> {
    return this.http.post<MemberModel>(this.baseUrl, member).pipe(
      map((obj) => obj),
      // catchError((error) => error)
    );
  }

  public read(): Observable<MemberModel[]> {
    return this.http.get<MemberModel[]>(this.baseUrl).pipe(
      map((obj) => obj),
    );
  }

  public readById(id: number): Observable<MemberModel> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<MemberModel>(url).pipe(
      map((obj) => obj)
    );
  }

  public delete(id: number): Observable<MemberModel> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<MemberModel>(url).pipe(
      map((obj) => obj)
    );
  }

  public update(member: MemberModel): Observable<MemberModel> {
    const url = `${this.baseUrl}/${member.id}`;
    return this.http.put<MemberModel>(url, member).pipe(
      map((obj) => obj)
    );
  }
}

