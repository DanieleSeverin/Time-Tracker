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
    this.startActivityEvent.emit(activity);
    this.subscription = this.timer().subscribe();
  }

  stopActivity(activity :Activity){
    this.subscription?.unsubscribe();
    activity.active = false;
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
    this.activity.time++;
    this.tickEvent.emit();
  }

}
