import { Component, OnInit } from '@angular/core';
import { MainService } from "../services/main.service";
import { Ingredient } from '../entity/Ingredient';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.ingList = this.mainService.getFilterList();
    this.mainService.bindHome(this);
  }

  ingList: Ingredient[];
  selectedIng: Ingredient;

  onSelect(ing: Ingredient): void {  
    this.selectedIng = ing; 
  }

  refreshList(): void {
    this.ingList = this.mainService.getFilterList();
  }

}
