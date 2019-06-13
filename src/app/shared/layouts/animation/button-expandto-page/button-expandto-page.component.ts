import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-button-expandto-page',
  templateUrl: './button-expandto-page.component.html',
  styleUrls: ['./button-expandto-page.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        width: '300px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
/*       transition('open => closed', [
        animate('300ms')
      ]),
      transition('closed => open', [
        animate('250ms')
      ]), */
      transition('* => *', [
        animate('1s', keyframes ( [
          style({ opacity: 0.1, offset: 0.1 }),
          style({ opacity: 0.6, offset: 0.2 }),
          style({ opacity: 1,   offset: 0.5 }),
          style({ opacity: 0.2, offset: 0.7 })
        ]))])
    ]),
  ]
})
export class ButtonExpandtoPageComponent implements OnInit {
  isOpen: boolean = false;
  constructor() { }

  ngOnInit() { }
  
  toggle(){
    this.isOpen = !this.isOpen;
  }

}
