import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { MainService } from '../services/main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.searchType = this.searchType;
  }

  searchType: string = "Name";
  searchString: string = "";

  setSearchType(type: string): void {    
    this.searchType = type;
    this.mainService.searchType = type;
  }

  onInput(value: string): void {
    this.mainService.setSearchString(value);
    this.mainService.toggleSearch();
    this.mainService.refreshHomeComp();
  }
  

}
