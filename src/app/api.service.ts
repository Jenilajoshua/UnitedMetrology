import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient) { }
  getcustdata(){
    return this.http.get('https://rulhpq03nk.execute-api.ap-south-1.amazonaws.com/fetch/id');
    
  }
  admindata(){
  return this.http.get('https://7xbn7mwydg.execute-api.ap-south-1.amazonaws.com/admins/email')
  }
}
