import { Component, OnInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import esLocale from '@fullcalendar/core/locales/es';

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
      locales: [esLocale],
      displayEventTime: false,

      googleCalendarApiKey: 'AIzaSyDEl-qPecz4ozriEeoEYUb31cqNGSB6ma8',
      // US Holidays
      events: '69iqm5arijaei0t0q5m2ijqlec@group.calendar.google.com',

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
