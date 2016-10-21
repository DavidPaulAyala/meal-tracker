import { Component } from '@angular/core';
import { Meal } from './meal.model'

@Component({
  selector:'my-app',
  template: `
  <div class="container">
    <div class="well">
      <h1>Meal Tracker</h1>
      <meal-list
        [childMealList]="masterMealList"
        (clickSender)="showMealDetails($event)"
      ></meal-list>
      <edit-meal
        [childSelectedMeal]="selectedMeal"
        (doneClickedSender)="finishedEditing()"
      ></edit-meal>
    </div>
  </div>
  `
})

export class AppComponent{
  public masterMealList: Meal[] = [
    new Meal("Breakfast Burrito", "Bacon, egg, potato, cheddar", 550),
    new Meal("Apple", "1 large Gala", 65)
  ];
  selectedMeal: Meal = null;
  showMealDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
}
