import { Component, Input, OnInit } from '@angular/core';
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
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddActivityModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.createActivity(result.description);
    });
  }

  createActivity(description: string){
    const activity: Activity = {
      description,
      time: 0,
      active: false
    }
    this.Activities.push(activity);
  }

}
