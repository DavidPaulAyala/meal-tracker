import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div class="meal" *ngIf="childSelectedMeal">
      <h1>Edit Meal</h1>
      <div>
        <label>Enter the name of the Meal:</label>
        <input [(ngModel)]="childSelectedMeal.name">
      </div>
      <div>
        <label>Enter the details of the Meal:</label>
        <input [(ngModel)]="childSelectedMeal.details">
      </div>
      <div>
        <label>Enter the calories of the Meal:</label>
        <input [(ngModel)]="childSelectedMeal.calories">
        <button class="button" (click)="doneClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
