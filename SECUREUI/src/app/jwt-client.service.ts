import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private httpClient: HttpClient) { }
  private userUrl = 'http://localhost:2003/authenticate';

  public generateToken(request:any) {
    return this.httpClient.post<String>(this.userUrl, request);
  }

  public welcome(token:any) {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.httpClient.get<string>("http://localhost:2003/user", {headers, responseType: 'text' as 'json' });
  }
}
