import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-activity-modal',
  templateUrl: './add-activity-modal.component.html',
  styleUrls: ['./add-activity-modal.component.scss']
})
export class AddActivityModalComponent implements OnInit {

  DESCRIPTION_MAX_LENGTH = 50;

  form = this.fb.group({
    description: ['', {
      validators: [Validators.required, Validators.maxLength(this.DESCRIPTION_MAX_LENGTH)],
    }]
  });

  get description(){return this.form.controls['description']}
  
  constructor(public dialogRef: MatDialogRef<AddActivityModalComponent>,
              private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    console.log("onNoClick");
    this.dialogRef.close();
  }

}
