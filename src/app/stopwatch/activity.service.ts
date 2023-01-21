import { Injectable } from '@angular/core';
import { Keys, StorageService } from '../services/storage.service';
import { Activity } from './models/Activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private _storage: StorageService) { }

  getActivities(): Activity[] {
    return this._storage.get(Keys.Activities) ?? [];
  }

  addActivity(activity: Activity): void {
    const activities = this.getActivities();
    activities.push(activity);
    this._storage.set(Keys.Activities, activities);
  }

  deleteActivity(activity: Activity): void {
    const activities = this.getActivities();
    const index = activities.indexOf(activity);
    activities.splice(index, 1);
    this._storage.set(Keys.Activities, activities);
  }

  saveActivities(activities: Activity[]): void {
    this._storage.set(Keys.Activities, activities);
  }
}
