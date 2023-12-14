import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { SkyButtonType } from './interfaces/sky-button-type.enum';

@Directive()
export class SkyButtonBaseComponent {
  @Input('s-title') title?: string;

  @Input('s-type') type: SkyButtonType = SkyButtonType.primary;

  @Input('s-disabled') disabled: boolean = false;

  @Output('s-click') click = new EventEmitter<any>();
}
