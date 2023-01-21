import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Activity } from '../models/Activity.model';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {

  @Input() Activities: Activity[] = [];
  @Output() startActivityEvent = new EventEmitter<Activity>();
  @Output() deleteActivityEvent = new EventEmitter<Activity>();
  @Output() tickEvent = new EventEmitter();
  @Output() dropEvent = new EventEmitter<CdkDragDrop<Activity[]>>();
  
  constructor() { }

  ngOnInit(): void {
  }

  startActivity(activity :Activity){
    this.startActivityEvent.emit(activity);
  }

  deleteActivity(activity :Activity){
    this.deleteActivityEvent.emit(activity);
  }

  tick(){
    this.tickEvent.emit();
  }

  drop(event: CdkDragDrop<Activity[]>) {
    this.dropEvent.emit(event);
  }

}
