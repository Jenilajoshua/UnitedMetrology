import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { APIService } from '../api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newusers=[];
  newadmin=[];
  newcust=[];
  customers: any
Items:any=[]
detail:any= [];
admin: any
Itemsadmin:any=[]
detailadmin:any= [];
constructor(private api:APIService,private _router: Router,private http:HttpClient) { }
user:string='';
logerror:boolean=false
onSubmit(newdata:any){

let num:number=0;
var i=num
for(i=num;i<=this.newusers.length;i++){
if(newdata.EMAIL==this.newusers[i])
{  
  this._router.navigateByUrl('/user')   
}this.logerror=true

}

}
onAdmin(newdata:any){
  let num:number=0;
  var i=num
  for(i=num;i<=this.newadmin.length;i++){
  if(newdata.EMAIL==this.newadmin[i])
  {  
    this._router.navigateByUrl('/admin')   
  }this.logerror=true
  
  }
}
 
onClosemessage(){
  this.logerror=false;
  
}

ngOnInit(): void {
    this.api.getcustdata().subscribe((data)=>
    {
      this.customers=(data);      
     this.Items.push((Object.values(data)[0]))
      this.detail=Object.values(this.Items[0])
      this.newusers=this.detail.map((user:any)=>{
      return [user.Email] 
    })
    });

    this.api.admindata().subscribe((dat)=>
    {
      this.admin=(dat);      
     this.Itemsadmin.push((Object.values(dat)[0]))    
      this.detailadmin=Object.values(this.Itemsadmin[0])  
      this.newadmin=this.detailadmin.map((ad:any)=>{
      return [ad.Email]

})

 })
}

}


