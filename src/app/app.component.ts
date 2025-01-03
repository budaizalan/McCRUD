import { Component } from '@angular/core';
import { RestaurantComponent } from "./restaurant/restaurant.component";
import { RestaurantModel } from '../models/restaurantModel';
import { ServicesService } from './services.service';
import { EditRestaurantComponent } from "./edit-restaurant/edit-restaurant.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RestaurantComponent, EditRestaurantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  restaurants: RestaurantModel[] = [];
  modifyRestaurant: RestaurantModel | undefined = undefined;
  newRestaurant: RestaurantModel | undefined = undefined;

  constructor(private Service: ServicesService) {}


  ngOnInit(){
    this.Service.getRestaurants().subscribe({
      next: (data: RestaurantModel[]) => {
        this.restaurants = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  newRes(){
    this.newRestaurant = {
      store_name: "",
      store_id: undefined,
      city: "",
      state_name: "",
      open_hours: {
        hoursMonday: "06:00-23:00",
        hoursTuesday: "06:00-23:00",
        hoursWednesday: "06:00-23:00",
        hoursThursday: "06:00-23:00",
        hoursFriday: "06:00-23:00",
        hoursSaturday: "06:00-23:00",
        hoursSunday: "06:00-23:00"
      },
      open_hours_drive_through: {
        driveHoursMonday: "00:00-0:00",
        driveHoursTuesday: "00:00-0:00",
        driveHoursWednesday: "00:00-0:00",
        driveHoursThursday: "00:00-0:00",
        driveHoursFriday: "00:00-0:00",
        driveHoursSaturday: "00:00-0:00",
        driveHoursSunday: "00:00-0:00"
      },
      id: undefined,
    };
  }
  
  saveNew(restaurant: RestaurantModel) {
    this.Service.addRestaurant(restaurant).subscribe({
      next: (data: RestaurantModel) => {
        this.restaurants.push(data);
        this.newRestaurant = undefined;
        window.location.reload();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
