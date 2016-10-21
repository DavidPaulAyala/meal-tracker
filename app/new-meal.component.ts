import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <div class="meal">
    <h1>New Meal</h1>
    <div>
      <label>Enter the Name of the Meal:</label>
      <input #newName>
    </div>
    <div>
      <label>Enter the Details of the Meal:</label>
      <input #newDetails>
    </div>
    <div>
      <label>Enter the Calories of the Meal:</label>
      <input #newCalories>
      <button class="button" (click)="
        addClicked(newName.value, newDetails.value, newCalories.value);
        newName.value='';
        newDetails.value='';
        newCalories.value='';
      ">Add</button>
    </div>
  </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, details: string, calories: number) {
    var newMealToAdd: Meal = new Meal(name, details, calories)
    this.newMealSender.emit(newMealToAdd);
  }
}
