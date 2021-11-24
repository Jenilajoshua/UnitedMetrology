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
  // postcustomerdata(da){
  // return this.http.post('https://rulhpq03nk.execute-api.ap-south-1.amazonaws.com/update/id',data)
  // }
}
