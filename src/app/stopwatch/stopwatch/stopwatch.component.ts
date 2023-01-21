import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activity.service';
import { Activity } from '../models/Activity.model';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {

  Activities: Activity[] = [];

  constructor(private _activity : ActivityService) { }

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities(): void {
    this.Activities = this._activity.getActivities();
  }

  addActivity(description :string): void {
    const activity = this._activity.newActivity(description);
    this._activity.addActivity(activity);
    this.getActivities();
  }

  deleteActivity(activity: Activity): void {
    this._activity.deleteActivity(activity);
    this.getActivities();
  }

  saveActivities(): void {
    this._activity.saveActivities(this.Activities);
  }

}
