import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
customers: any
Items:any=[]
detail:any= [];
success: boolean=false;
disabled:boolean=false;


  constructor(private api:APIService , private http:HttpClient) { }
  display:boolean=false;
  formdisplay:boolean=false;
  
  status=['Success','Cancelled','In Progress']
  onview(){
  this.display=true;
  }
  onCloseClick(){
    this.display=false
    this.formdisplay=false
  }
  onSubmit(newdata:any){
    this.http.post('https://rulhpq03nk.execute-api.ap-south-1.amazonaws.com/adding/id',newdata)
    .subscribe()
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
      

    })


    
}
     
}
