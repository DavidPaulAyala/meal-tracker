import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div *ngFor="let currentMeal of childMealList" class="meal">
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

  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
