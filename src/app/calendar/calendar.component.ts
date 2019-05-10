import { Component, OnInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendar : Calendar;

  constructor() { }

  ngOnInit() {
    this.draw_calendar();
  }

  draw_calendar() {

    let calendarEl: HTMLElement = document.getElementById('calendar')!;

    this.calendar = new Calendar(calendarEl, {
      plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin, googleCalendarPlugin],
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      displayEventTime: false,
      // THIS KEY WON'T WORK IN PRODUCTION!!!
      // To make your own Google API key, follow the directions here:
      // http://fullcalendar.io/docs/google_calendar/
      googleCalendarApiKey: 'AIzaSyDEl-qPecz4ozriEeoEYUb31cqNGSB6ma8',

      // US Holidays
      events: 'tqaj9rcdgcvn96hqv4qi2inoks@group.calendar.google.com',

      eventClick: function (arg) {

        // opens events in a popup window
        window.open(arg.event.url, '_blank', 'width=700,height=600');

        // prevents current tab from navigating
        arg.jsEvent.preventDefault();
      }
    });

    this.calendar.render();
  }

  re_draw()
  {
    this.calendar.refetchEvents();
  }

}
