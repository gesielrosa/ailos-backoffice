import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconComponent} from '../../icon/icon.component';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent {
  @Input({required: true}) icon: string = '';
}
