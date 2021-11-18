import { Component, OnInit } from '@angular/core';
import { Customer } from '../model';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }
  display:boolean=false;
  formdisplay:boolean=false;

  status=['Success','Cancelled','In Progress']
  customer:Customer[]=[{
    Name:"Jenila",
    Phone_number:7851625874,
    Email:"abc@gmail.com",
    Message:"circuit board",
    status:"Success"
  }]

  onnew(det:any){
    this.customer.push(det.value);
    det.reset()
  }
  onview(){
    this.display=true;
  }
  onCloseClick(){
    this.display=false
    this.formdisplay=false
  }
  onadd(){
    this.formdisplay=true;
  }
  ngOnInit(): void {
  }

}
