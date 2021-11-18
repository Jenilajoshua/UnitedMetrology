import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
constructor(private _router: Router) { }
user:string='';
selectChangeHandler(event:any){
    this.user=event.target.value;

    if (this.user=="1"){
    this._router.navigateByUrl('/user');
    }
    else {
      this._router.navigateByUrl('/admin');
    }
    }
  ngOnInit(): void {
  }

}
