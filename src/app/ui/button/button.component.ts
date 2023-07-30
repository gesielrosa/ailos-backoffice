import {Component, HostBinding, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'button[app-button]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class GrButtonComponent {
  @Input() color: 'primary' | 'secondary' = 'primary';

  @Input() fill: 'solid' | 'outlined' | 'clean' = 'solid';

  @Input() edge: 'square' | 'rounded' = 'square';

  @Input() size: 'p' | 'm' = 'p';

  @Input() iconOnly: boolean = false;

  @HostBinding('class.app-button--fill-solid')
  private get _fillSolid(): boolean {
    return this.fill === 'solid' || !this.fill;
  }

  @HostBinding('class.app-button--fill-outlined')
  private get _fillOutlined(): boolean {
    return this.fill === 'outlined';
  }

  @HostBinding('class.app-button--fill-clean')
  private get _fillClean(): boolean {
    return this.fill === 'clean';
  }

  @HostBinding('class.app-button--edge-square')
  private get _edgeSquare(): boolean {
    return this.edge === 'square';
  }

  @HostBinding('class.app-button--edge-rounded')
  private get _edgeRounded(): boolean {
    return this.edge === 'rounded';
  }

  @HostBinding('class.app-button--size-p')
  private get _widthP(): boolean {
    return this.size === 'p';
  }

  @HostBinding('class.app-button--size-m')
  private get _widthM(): boolean {
    return this.size === 'm';
  }

  @HostBinding('class.app-button--icon-only')
  private get _iconOnly(): boolean {
    return this.iconOnly;
  }

  @HostBinding('style.--app-button-color')
  private get _color(): string {
    return this.color ? `var(--color-${this.color})` : '';
  }

  @HostBinding('style.--app-button-color-rgb')
  private get _colorRGB(): string {
    return this.color ? `var(--color-${this.color}-rgb)` : '';
  }

  @HostBinding('style.--app-button-color-contrast')
  private get _colorContrast(): string {
    return this.color ? `var(--color-${this.color}-contrast)` : '';
  }

  @HostBinding('style.--app-button-color-tint')
  private get _colorTint(): string {
    return this.color ? `var(--color-${this.color}-tint)` : '';
  }

  @HostBinding('style.--app-button-color-shade')
  private get _colorShade(): string {
    return this.color ? `var(--color-${this.color}-shade)` : '';
  }
}
