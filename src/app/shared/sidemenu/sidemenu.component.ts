import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  imports: [],
  templateUrl: './sidemenu.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidemenuComponent { }
