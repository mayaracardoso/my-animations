import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),
      transition('small <=> large', animate('500ms ease-in'))
    ])
  ]
})
export class AppComponent {
  title = 'my-animations';
  state ='small';

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
}
