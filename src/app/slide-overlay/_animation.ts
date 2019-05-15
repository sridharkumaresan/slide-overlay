import { trigger, state, style, transition, animate } from '@angular/animations';

export const slideAnimation = [
  trigger('panelState', [
      state('hidden', style({
          opacity: 0
      })),
      state('visible', style({
          opacity: 1
      })),
      transition('visible => hidden', animate('300ms ease-in')),
      transition('hidden => visible', animate('300ms ease-out'))
  ])
];
