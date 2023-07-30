import {Component, HostBinding, Input, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IconComponent {
  @HostBinding('class') @Input() iconStyle: 'filled' | 'outlined' = 'filled';
}
