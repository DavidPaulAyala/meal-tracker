import { Component } from '@angular/core';
import { Meal } from './meal.model'

@Component({
  selector:'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <meal-list
      [childMealList]="masterMealList"
    ></meal-list>
  </div>
  `
})

export class AppComponent{
  public masterMealList: Meal[] = [
    new Meal("Breakfast Burrito", "Bacon, egg, potato, cheddar", 550),
    new Meal("Apple", "1 large Gala", 65)
  ];
}
