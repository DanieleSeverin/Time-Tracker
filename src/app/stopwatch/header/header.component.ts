import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddActivityModalComponent } from '../add-activity-modal/add-activity-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() addActivityEvent = new EventEmitter<string>();
  @Output() clearActivitiesEvent = new EventEmitter();

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

  clear(){
    this.clearActivitiesEvent.emit();
  }

}
