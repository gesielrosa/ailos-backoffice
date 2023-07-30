import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Step} from './step';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent {
  @Input() steps: Step[] = [];

  @Input() currentStep: number = 0;

  public next(): void {
    if (this.steps.length < this.currentStep) {
      this.currentStep += this.currentStep;
    }
  }

  public previous(): void {
    if (this.steps.length > this.currentStep) {
      this.currentStep -= this.currentStep;
    }
  }
}
