import { Component, OnInit } from '@angular/core';
import { Activity } from '../models/Activity.model';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {

  Activities: Activity[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
