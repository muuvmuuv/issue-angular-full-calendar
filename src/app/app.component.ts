import { Component, ViewChild } from '@angular/core';

import { FullCalendarComponent } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import deLocale from '@fullcalendar/core/locales/de';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly options: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek',
    },
    aspectRatio: 1.65,
    editable: false,
    selectable: true,
    selectMirror: false,
    dayMaxEvents: true,
    locale: deLocale,
    nowIndicator: true,
    weekNumbers: true,
    weekNumberFormat: { week: 'numeric' },
    businessHours: {
      daysOfWeek: [1, 2, 3, 4, 5],
      startTime: '7:00',
      endTime: '18:00',
    },
    eventClick: (event) => {
      console.debug(event);
    },
  };

  @ViewChild(FullCalendarComponent) readonly calendar!: FullCalendarComponent;

  ngAfterViewInit(): void {
    console.info(this.calendar);
  }
}
