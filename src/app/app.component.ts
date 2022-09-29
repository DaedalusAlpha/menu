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
    category: 'dinner',
    price: 11.99,
  };
  item2: MenuItem = { item: 'Pizza', category: 'dinner', price: 11.99 };
  item3: MenuItem = { item: 'Wings', category: 'sides', price: 8.99 };
  item4: MenuItem = { item: 'Breadsticks', category: 'sides', price: 4.99 };
  item5: MenuItem = { item: 'Caesar Salad', category: 'salads', price: 5.99 };
  item6: MenuItem = { item: 'Cinnamon Roll', category: 'dessert', price: 8.99 };
  menu: MenuItem[] = [
    this.item1,
    this.item2,
    this.item3,
    this.item4,
    this.item5,
    this.item6,
  ];
}
