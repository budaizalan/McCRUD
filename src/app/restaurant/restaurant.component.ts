import { Component, Input } from '@angular/core';
import { RestaurantModel } from '../../models/restaurantModel';
import { ServicesService } from '../services.service';
import { EditRestaurantComponent } from "../edit-restaurant/edit-restaurant.component";

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [EditRestaurantComponent],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {
  @Input() model: RestaurantModel | undefined;
  modifiedRestaurant: RestaurantModel | undefined = undefined;
  restaurants: RestaurantModel[] = [];
  showInStoreOpenHours: boolean = true;
  
    constructor(private Service: ServicesService) {}
  
  switch(){
    this.showInStoreOpenHours = !this.showInStoreOpenHours;
  }

  deleteRestaurant(restaurant: RestaurantModel) {
    if (!confirm('Biztosan törölni szeretné ezt az éttermet?')) {
      return;
    }
    this.Service.deleteRestaurant(restaurant).subscribe({
    next: (data: RestaurantModel) => {
      const index = this.restaurants.findIndex((a) => a.store_id == data.store_id);
      this.restaurants.splice(index, 1);
      window.location.reload();
    },
    error: (err) => {
      console.log(err);
    },
  });}

  modifyRestaurant(restaurant: RestaurantModel) {
    this.modifiedRestaurant = JSON.parse(JSON.stringify(restaurant));
  }

  
  saveModified(restaurant: RestaurantModel) {
    this.Service.modifyRestaurant(restaurant).subscribe({
      next: (data: RestaurantModel) => {
        const index = this.restaurants.findIndex((a) => a.store_id == data.store_id);
        this.restaurants[index] = data;
        this.modifiedRestaurant = undefined;
        //Mivel nem jó az adatbázis (ID mezők), ezért a módosítás nem fog működni frissítés nélkül
        window.location.reload();

      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  
  
}
