import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RestaurantModel } from '../../models/restaurantModel';

@Component({
  selector: 'app-edit-restaurant',
  standalone: true,
  imports: [],
  templateUrl: './edit-restaurant.component.html',
  styleUrl: './edit-restaurant.component.css'
})
export class EditRestaurantComponent {
  @Input() model: RestaurantModel | undefined = undefined;
  @Output() saved = new EventEmitter<RestaurantModel>();

  getValue(event: any): string {
    return event.target.value;
  }

  getNumericValue(event: any): number {
    return Number(event.target.value);
  }

  save() {
    this.saved.emit(this.model);
  }
}
