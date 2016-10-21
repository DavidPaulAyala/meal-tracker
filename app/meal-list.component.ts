import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div *ngFor="let currentMeal of childMealList" class="meal">
      <h4>{{ currentMeal.name }}</h4>
      <p>Details: {{ currentMeal.details }}</p>
      <p>Cakories: {{ currentMeal.calories }}</p>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
}
