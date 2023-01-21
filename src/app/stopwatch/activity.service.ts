import { Injectable } from '@angular/core';
import { Keys, StorageService } from '../services/storage.service';
import { Activity } from './models/Activity.model';
import { Uuid } from '@helpers/Uuid';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private _storage: StorageService) { }

  getActivities(): Activity[] {
    return this._storage.get(Keys.Activities) ?? [];
  }

  newActivity(description: string): Activity {
    return {
      uuid : Uuid(),
      description: description,
      active: false,
      time: 0
    };
  }

  addActivity(activity: Activity): void {
    const activities = this.getActivities();
    activities.push(activity);
    this._storage.set(Keys.Activities, activities);
  }

  deleteActivity(activity: Activity): void {
    const activities = this.getActivities();
    const index = activities.findIndex(a => a.uuid === activity.uuid);
    if(index == -1) throw new Error(`Activity ${activity.uuid} not found`);
    activities.splice(index, 1);
    this._storage.set(Keys.Activities, activities);
  }

  saveActivities(activities: Activity[]): void {
    this._storage.set(Keys.Activities, activities);
  }
}