import {  OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Component , TemplateRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-ez-login',
  templateUrl: './ez-login.component.html',
  styleUrls: ['./ez-login.component.css']

})
export class EzLoginComponent implements OnInit {


  username;
  pwd;
  modalRef: BsModalRef;
  template: TemplateRef<any>;

  closeResult: string;
  constructor(private route: Router,
              private routes: ActivatedRoute,
              private modalService: BsModalService,
              private toast: ToastrService) {
              }



  ngOnInit() {
  }

  keyDownFunction(event,template: TemplateRef<any>) {
     if(event.keyCode == 13){
        this.open(template);
     }

  }
  open(template: TemplateRef<any>){

   if(this.username === "admin" && this.pwd === "admin123")
   {
    this.modalRef = this.modalService.show(template);
    this.route.navigateByUrl('/communityList');
   }
   
   else
   {
    this.toast.error('Invalid Username or Password', 'Enter a valid one!!!')

    // alert("inavlid username or password");
    this.route.navigateByUrl('/');
   }
 }
}


