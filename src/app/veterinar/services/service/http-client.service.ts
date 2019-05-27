import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  public API = '//localhost:3000';
  public LoginApi = this.API + '/login';

  constructor(private http: HttpClient) {
  }
}
