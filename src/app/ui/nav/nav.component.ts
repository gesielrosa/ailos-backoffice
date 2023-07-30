import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import {IconComponent} from '../icon/icon.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, IconComponent],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {}
