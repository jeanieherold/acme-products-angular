import { Component } from '@angular/core';

//component metadata in decorator
@Component({
  selector: 'pm-root', //directive - think of custom html tag
  template: `
    <div class="container-fluid mt-3">
      <div class="row">
        <h1>{{ pageTitle }}</h1>
        <pm-products></pm-products>
      </div>
    </div>
  `,
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
