import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Chirpus Pizza';
  menu: MenuItem[] = [
    {
      item: 'Chicken Fingers',
      category: 'Dinner',
      price: 11.99,
    },
    {
      item: 'pizza',
      category: 'dinner',
      price: 11.99,
    },
    {
      item: 'wings',
      category: 'sides',
      price: 8.99,
    },
    {
      item: 'breadsticks',
      category: 'sides',
      price: 4.99,
    },
    {
      item: 'caesar salad',
      category: 'salads',
      price: 5.99,
    },
    {
      item: 'cinnamon roll',
      category: 'dessert',
      price: 8.99,
    },
  ];
}
