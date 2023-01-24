import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class AppService {
  login:boolean = true
  constructor(private httpClient: HttpClient) {}
  isLoggedIn() {
    return this.login;
  }

  getUser(): Observable<any> {
    return this.httpClient.get('https://api.github.com/users').pipe(map(a=> a));
  }

  testError(): Observable<any> {
    return this.httpClient.get('https://api.giathub.com/users').pipe(map(a=> a));
  }

};