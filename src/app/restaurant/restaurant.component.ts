import { Component, Input } from '@angular/core';
import { RestaurantModel } from '../../models/restaurantModel';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {
  @Input() model: RestaurantModel | undefined;

}
