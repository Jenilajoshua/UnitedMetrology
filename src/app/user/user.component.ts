import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _router: Router) { }
ondisplay(){
  this._router.navigateByUrl("/form")
}
  ngOnInit(): void {
  }

}
