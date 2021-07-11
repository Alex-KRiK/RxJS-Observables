import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface IIpData {
  origin: string;
}

@Component({
  selector: 'async',
  template: `
    <pre class="align-center">
      We're using Async Pipe here!
      All our subscriptions are completed!
      We have no memory leaks!

      The IP address we received - <span class="red">{{ (data | async)?.origin }}</span>
    </pre>
    `,
    styleUrls: ['./app.component.scss']

})
export class AsyncComponent  {
  data = this.http.get<IIpData>('http://httpbin.org/ip');

  constructor(
    private http: HttpClient
  ) { }
}
