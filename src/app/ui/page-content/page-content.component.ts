import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeaderService} from '../header/header.service';

@Component({
  selector: 'app-page-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss'],
})
export class PageContentComponent {
  @Input({required: true}) set headerTitle(value: string) {
    this._headerService.setTitle(value);
  }

  @Input({required: true}) set headerBreadcrumbs(value: string[]) {
    this._headerService.setBreadcrumbs(value);
  }

  constructor(private readonly _headerService: HeaderService) {}
}
