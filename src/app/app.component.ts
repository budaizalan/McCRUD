import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RestaurantComponent } from "./restaurant/restaurant.component";
import { RestaurantModel } from '../models/restaurantModel';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RestaurantComponent],
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

  newRestaurantFunction(){
    this.newRestaurant = {
      store_name: '',
      store_id: undefined,
      city: '',
      state_name: '',
      open_hours: {hoursMonday: '', hoursTuesday: '', hoursWednesday: '', hoursThursday: '', hoursFriday: '', hoursSaturday: '', hoursSunday: ''},
      open_hours_drive_through: {driveHoursMonday: '', driveHoursTuesday: '', driveHoursWednesday: '', driveHoursThursday: '', driveHoursFriday: '', driveHoursSaturday: '', driveHoursSunday: ''},
    };
  }

}
