import { Injectable } from '@angular/core';
import IngredientList from '../../assets/Ingredients.json';
import { Ingredient } from '../entity/Ingredient';
import { HomeComponent } from '../home/home.component.js';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor() { }

  searchType: string;
  searchString: string

  fullList: Ingredient[] = IngredientList;
  filterList: Ingredient[] = this.fullList;

  homeComp: HomeComponent;

  bindHome(homeComp: HomeComponent){
    this.homeComp = homeComp;
  }

  refreshHomeComp(): void {
    this.homeComp.refreshList();
  }

  setSearchString(value: string): void {
    this.searchString = value;
  }

  getFilterList(): Ingredient[] {
    return this.filterList;
  }

  searchByName(): void {
    this.filterList = this.fullList.filter((ing) => {
      return ing.Name.toLowerCase().includes(this.searchString.toLowerCase());
    });
  }

  searchByEffect(): void {
    this.filterList = this.fullList.filter((ing) => {
      return ing.Effect1.toLowerCase().includes(this.searchString.toLowerCase()) 
        || ing.Effect2.toLowerCase().includes(this.searchString.toLowerCase()) 
        || ing.Effect3.toLowerCase().includes(this.searchString.toLowerCase()) 
        || ing.Effect4.toLowerCase().includes(this.searchString.toLowerCase());
    });
  }

  toggleSearch(): void {  
    if(this.searchType === 'Name'){
      this.searchByName();
    }
    else {
      this.searchByEffect();
    }
  }
}
