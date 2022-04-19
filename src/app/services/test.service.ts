import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(public http: HttpClient) { }

  //baseUrl = 'http://localhost:8080'
  baseUrl = 'https://waltersstudyappbackend.herokuapp.com'

  async getTest(id: any){
    return await this.http.get(this.baseUrl + '/questions/awssysops/' + id);
  };
}
