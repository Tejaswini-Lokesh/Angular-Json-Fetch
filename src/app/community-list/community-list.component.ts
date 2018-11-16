import { Component, OnInit,TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { ListServiceService } from '../list-service.service';
import {Pipe, PipeTransform} from '@angular/core';


 


@Component({
  selector: 'app-community-list',
  templateUrl: './community-list.component.html',
  styleUrls: ['./community-list.component.css']
})
export class CommunityListComponent implements OnInit {
  public list = [];
  collection = [];
  show:boolean = false;
  isCollapsed = true;
  constructor(private route: Router,
              private _listSer:  ListServiceService) { 
                for(let i = 1; i<= 100 ;i++ ){
                  this.collection.push(`l ${i}`);
                }
              }

  ngOnInit() {
    this._listSer.getList()
    .subscribe(data => this.list = data);
  }
  toggleCollapse() {
    this.show = !this.show
  }
goBack(){
  this.route.navigateByUrl('/');
  
}


}
