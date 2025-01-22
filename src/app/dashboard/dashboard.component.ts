import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidemenuComponent } from '../shared/sidemenu/sidemenu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [SidemenuComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardComponent { }
