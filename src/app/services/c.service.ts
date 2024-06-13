import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from '../interfaces/user';
import { END_POINTS } from '../constant/constant';

@Injectable({ providedIn: 'root' })
export class CService {
  constructor(private httpClient: HttpClient) {}
  isUserCreated = new BehaviorSubject<Boolean>(true);
  editUserData = new Subject<User>();
  generatePDF = new BehaviorSubject<Boolean>(false);

  getAllUsers(): Observable<any> {
    return this.httpClient.get(END_POINTS.USER);
  }
  createUser(payload: User): Observable<any> {
    return this.httpClient.post(END_POINTS.USER, payload);
  }
  deleteUser(id: number): Observable<any> {
    return this.httpClient.delete(`${END_POINTS.USER}/${id}`);
  }
  updateUser(id: number, payload: User): Observable<any> {
    return this.httpClient.patch(`${END_POINTS.USER}/${id}`, payload);
  }
  downloadPDF(): Observable<any> {
    return this.httpClient.get(END_POINTS.PDF_DOWNLOAD);
  }
}
