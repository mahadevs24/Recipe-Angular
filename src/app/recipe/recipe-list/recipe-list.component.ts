import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'this is simply a test',
      'https://www.freeimages.com/photo/peacock-1169961'
    ),
    new Recipe(
      'A test recipe',
      'this is simply a test',
      '"C:UsersMahadevShirodkarDownloadspexels-dapur-melodi-1109197.jpg"'
    ),
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
    console.log('recepie was selected');
  }
}
