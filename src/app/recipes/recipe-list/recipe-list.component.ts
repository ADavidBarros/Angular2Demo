import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  private pathUrl: string = "http://www.provechoperu.com/wp-content/uploads/2014/11/for-website-4474.jpg"; 
  recipe = new Recipe("RecipeName", "Recipe Description", this.pathUrl);

  constructor() { }

  ngOnInit() {
  }

}
