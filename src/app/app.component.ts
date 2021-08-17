import { Component } from '@angular/core';

//component metadata in decorator
@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
