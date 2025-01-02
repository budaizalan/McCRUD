import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestaurantModel } from '../models/restaurantModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  url = 'http://localhost:3000/restaurants';

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<RestaurantModel[]> {
    return this.http.get<RestaurantModel[]>(this.url);
  }

  addRestaurant(restaurant: RestaurantModel): Observable<RestaurantModel> {
    return this.http.post<RestaurantModel>(this.url, restaurant);
  }

  modifyRestaurant(restaurant: RestaurantModel): Observable<RestaurantModel> {
    return this.http.put<RestaurantModel>(this.url + '/' + restaurant.id, restaurant);
  }

  deleteRestaurant(restaurant: RestaurantModel): Observable<RestaurantModel> {
    return this.http.delete<RestaurantModel>(this.url + '/' + restaurant.id);
  }
}
