import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';

import { CalendarFeatureComponent } from './calendar.component';
import { CalendarRoutingModule } from './calendar-routing.module';

import dayGridPlugin from '@fullcalendar/daygrid';
import timegrid from '@fullcalendar/timegrid';
FullCalendarModule.registerPlugins([dayGridPlugin, timegrid]);

@NgModule({
  imports: [CommonModule, CalendarRoutingModule, FullCalendarModule],
  declarations: [CalendarFeatureComponent],
})
export class CalendarFeatureModule {}
