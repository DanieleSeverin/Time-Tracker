import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddActivityModalComponent } from '../add-activity-modal/add-activity-modal.component';
import { Activity } from '../models/Activity.model';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {

  @Input() Activities: Activity[] = [];
  @Output() addActivityEvent = new EventEmitter<Activity>();
  @Output() deleteActivityEvent = new EventEmitter<Activity>();
  @Output() tickEvent = new EventEmitter();
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddActivityModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result) this.addActivity(result.description);
    });
  }

  addActivity(description: string){
    const activity: Activity = {
      description,
      time: 0,
      active: false
    }
    this.addActivityEvent.emit(activity);
  }

  startActivity(activity :Activity){
    this.Activities.forEach(a => a.active = false);
    activity.active = true;
  }

  deleteActivity(activity :Activity){
    this.deleteActivityEvent.emit(activity);
  }

  tick(){
    this.tickEvent.emit();
  }

}
