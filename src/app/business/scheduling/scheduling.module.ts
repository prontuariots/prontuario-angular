import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { AppRoutingModule } from '../../app-routing.module';
import { MaterialModule } from './../../shared/material/material.module';
import { SchedulingComponent } from './components/scheduling/scheduling.component';
import { SchedulingHeaderComponent } from './components/scheduling-header/scheduling-header.component';
import { SchedulingLayoutComponent } from './components/scheduling-layout/scheduling-layout.component';
import { SchedulingDayViewComponent } from './components/scheduling-day-view/scheduling-day-view.component';
import { SchedulingEventFormComponent } from './components/scheduling-event-form/scheduling-event-form.component';

@NgModule({
  entryComponents: [
    SchedulingComponent,
    SchedulingDayViewComponent,
    SchedulingEventFormComponent
  ],
  declarations: [
    SchedulingComponent,
    SchedulingHeaderComponent,
    SchedulingLayoutComponent,
    SchedulingDayViewComponent,
    SchedulingEventFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ]
})
export class SchedulingModule { }
