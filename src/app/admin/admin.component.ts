import { Component, OnInit } from '@angular/core';
import { Customer } from '../model';
import { APIService } from '../api.service';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

export interface people {
  id:number;
  Name:string;
  Phone_number:number;
  Email:string;
  Message:string;
  status:string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
customers: any
Items:any=[]
  param = { // OPTIONAL
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
  
    }), // OPTIONAL
    response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
    queryStringParameters: { },
};

  headers: any={}
  detail:any= [];
  success: boolean=false;
  disabled:boolean=false;
  // customer:people[]=this.customers;

  constructor(private api:APIService , private http:HttpClient) { }
  display:boolean=false;
  formdisplay:boolean=false;
  
  status=['Success','Cancelled','In Progress']


  onnew(det:any){
    // this.customer.push(det.value);
    // det.reset()

  }

  onview(){
  this.display=true;
  // this.api.getcustdata().subscribe((data)=>this.customers=(data))
    // this.headers=Object.keys(this.customers)
    // console.log("cust",this.customers)
    // console.log("cust",this.headers)
  }
  onCloseClick(){
    this.display=false
    this.formdisplay=false
  }
  onSubmit(newdata:any){
    this.http.post('https://rulhpq03nk.execute-api.ap-south-1.amazonaws.com/adding/id',newdata)
    .subscribe((res)=>console.warn("result",res))
    this.success=true;
   
  }
  onadd(){
    this.formdisplay=true;
  }
  onClosemessage(){
    this.success=false
  }
  ngOnInit(): void {
    this.api.getcustdata().subscribe((data)=>
    {
      this.customers=(data);
      
      this.Items.push(Object.values(data)[0])
      this.detail=Object.values(this.Items[0])
      console.log(this.detail)

    })

    // this.api.getcustdata().subscribe((data)=>
    // {
    //   this.customers.push(Object.keys(data));
    //   console.log("data",data)
    //   console.log("cust",this.customers)

    // })

    // this.headers=Object.keys(this.customers)
    
}
     
}
