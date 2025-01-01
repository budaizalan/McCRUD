import { DriveOpenHoursModel } from "./driveOpenHoursModel";
import { OpenHoursModel } from "./openHoursModel";

export interface RestaurantModel {
    store_name: string;
    store_id: number | undefined;
    city: string;
    state_name: string;
    open_hours: OpenHoursModel;
    open_hours_drive_through: DriveOpenHoursModel;
  }
  