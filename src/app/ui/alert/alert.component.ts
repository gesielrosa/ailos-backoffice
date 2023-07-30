import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IconComponent} from '../icon/icon.component';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
}
