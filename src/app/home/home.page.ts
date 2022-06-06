import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

import { ButtonToggle } from './button-toggle.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  readonly title = 'ng-sandbox';
  readonly buttonToggles: ButtonToggle[] = [
    {
      label: 'Bold',
      value: 'bold',
    },
    {
      label: 'Italic',
      value: 'italic',
    },
    {
      label: 'Underline',
      value: 'underline',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onButtonToggleChanged(event: MatButtonToggleChange): void {
    console.log(event.value);
  }
}
