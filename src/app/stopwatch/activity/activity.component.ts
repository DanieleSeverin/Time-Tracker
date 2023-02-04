import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { tick } from '@angular/core/testing';
import { interval, Subscription, tap } from 'rxjs';
import { Activity } from '../models/Activity.model';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  @Input() activity!: Activity;
  @Output() startActivityEvent = new EventEmitter<Activity>();
  @Output() stopActivityEvent = new EventEmitter<Activity>();
  @Output() deleteActivityEvent = new EventEmitter<Activity>();
  @Output() tickEvent = new EventEmitter();

  subscription? : Subscription;
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(sc : SimpleChanges){
    if(sc['activity']) this.activity.active = false;
  }

  startActivity(activity :Activity){
    activity.last_start_time = new Date();
    this.startActivityEvent.emit(activity);
    this.subscription = this.timer().subscribe();
  }

  stopActivity(activity :Activity){
    activity.last_start_time = undefined;
    if(activity.staging_time) activity.total_time += activity.staging_time;
    activity.staging_time = 0;
    this.subscription?.unsubscribe();
    activity.active = false;
    this.stopActivityEvent.emit(activity);
  }

  deleteActivity(activity :Activity){
    const conf = confirm("Are you sure you want to delete this activity?");
    if(conf) this.deleteActivityEvent.emit(activity);
  }

  timer(){
    return interval(1000).pipe(
      tap( () => {
        this.activity.active 
        ? 
        this.tick()
        :
        this.subscription?.unsubscribe();
      })
    );
  }

  tick(){
    if(this.activity.last_start_time)
      this.activity.staging_time = (new Date().getTime() - this.activity.last_start_time.getTime()) / 1000;
    this.tickEvent.emit();
  }

  resetActivity(activity :Activity){
    const conf = confirm("Are you sure you want to reset this activity?");
    if(!conf) return;
    activity.total_time = 0;
    activity.staging_time = 0;
    activity.last_start_time = undefined;
    this.stopActivityEvent.emit();
  }

}
