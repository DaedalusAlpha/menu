import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Chirpus Pizza';
  item1: MenuItem = {
    item: 'Chicken Fingers',
    category: 'Dinner',
    price: 11.99,
  };
  item2: MenuItem = { item: 'pizza', category: 'dinner', price: 11.99 };
  item3: MenuItem = { item: 'wings', category: 'sides', price: 8.99 };
  item4: MenuItem = { item: 'breadsticks', category: 'sides', price: 4.99 };
  item5: MenuItem = { item: 'caesar salad', category: 'salads', price: 5.99 };
  item6: MenuItem = { item: 'cinnamon roll', category: 'dessert', price: 8.99 };
  menu: MenuItem[] = [
    this.item1,
    this.item2,
    this.item3,
    this.item4,
    this.item5,
    this.item6,
  ];
}
