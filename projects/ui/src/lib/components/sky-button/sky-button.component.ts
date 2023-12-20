import { Component, OnInit } from '@angular/core';
import { SkyButtonBaseComponent } from './sky-button-base.component';

@Component({
  selector: 'sky-button',
  templateUrl: './sky-button.component.html',
  styleUrls: ['./sky-button.component.css']
})
export class SkyButtonComponent extends SkyButtonBaseComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}

  onClick() {
    this.click.emit();
  }
}
