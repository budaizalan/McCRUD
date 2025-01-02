import { Component, Input } from '@angular/core';
import { RestaurantModel } from '../../models/restaurantModel';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {
  @Input() model: RestaurantModel | undefined;
  restaurants: RestaurantModel[] = [];
  
    constructor(private Service: ServicesService) {}
  
  deleteRestaurant(restaurant: RestaurantModel) {
    if (!confirm('Biztosan törölni szeretné ezt az éttermet?')) {
      return;
    }
    this.Service.deleteRestaurant(restaurant).subscribe({
    next: (data: RestaurantModel) => {
      const index = this.restaurants.findIndex((a) => a.store_id == data.store_id);
      this.restaurants.splice(index, 1);
    },
    error: (err) => {
      console.log(err);
    },
  });}
}
