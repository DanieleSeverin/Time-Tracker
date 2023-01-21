import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
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
  @Output() addActivityEvent = new EventEmitter<string>();
  @Output() deleteActivityEvent = new EventEmitter<Activity>();
  @Output() tickEvent = new EventEmitter();
  @Output() dropEvent = new EventEmitter<CdkDragDrop<Activity[]>>();
  
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
    this.addActivityEvent.emit(description);
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

  drop(event: CdkDragDrop<Activity[]>) {
    this.dropEvent.emit(event);
  }

}
