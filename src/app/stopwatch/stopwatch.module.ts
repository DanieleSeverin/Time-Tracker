import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StopwatchRoutingModule } from './stopwatch-routing.module';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { SharedModule } from '../shared/shared.module';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { AddActivityModalComponent } from './add-activity-modal/add-activity-modal.component';
import { ActivityComponent } from './activity/activity.component';

const components = [
  StopwatchComponent,
  ActivityListComponent,
];

const modules = [
  CommonModule,
  StopwatchRoutingModule,
  SharedModule
];


@NgModule({
  declarations: [
    ...components,
    AddActivityModalComponent,
    ActivityComponent,
  ],
  imports: [
    ...modules
  ]
})
export class StopwatchModule { }
