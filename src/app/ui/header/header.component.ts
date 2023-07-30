import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IconComponent} from '../icon/icon.component';
import {AvatarComponent} from '../avatar/avatar.component';
import {HeaderService} from './header.service';
import {GrButtonComponent} from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, IconComponent, AvatarComponent, GrButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public title$ = this._headerService.title$;

  public breadcrumbs$ = this._headerService.breadcrumbs$;

  constructor(private readonly _headerService: HeaderService) {}
}
