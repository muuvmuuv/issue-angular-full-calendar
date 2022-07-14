import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import dayGridPlugin from '@fullcalendar/daygrid';
import timegrid from '@fullcalendar/timegrid';
FullCalendarModule.registerPlugins([dayGridPlugin, timegrid]);

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    ProgressBarModule,
    FullCalendarModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
