import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <select (change)="whenChanged($event.target.value)">
      <option value="all" selected="selected">Show All</option>
      <option value="highCalorie">Show Higher Calorie</option>
      <option value="lowCalorie">Show Lower Calorie</option>
    </select>

    <div *ngFor="let currentMeal of childMealList | calorie:selectedCalories" class="meal">
      <h4>{{ currentMeal.name }}</h4>
      <p>Details: {{ currentMeal.details }}</p>
      <p>Calories: {{ currentMeal.calories }}</p>
      <button (click)="editButtonHasBeenClicked(currentMeal)">Edit Meal</button>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  public selectedCalories: string = "";
  whenChanged(optionFromMenu) {
    this.selectedCalories = optionFromMenu;
    console.log(this.selectedCalories);
  }

  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
