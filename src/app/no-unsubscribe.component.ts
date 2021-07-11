import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IIpData } from './async.component';
import { Observable, ReplaySubject, Subject, Subscription } from 'rxjs';
import { catchError, first, switchMap, take, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'no-unsubscribe',
  template: `
    <pre class="align-center">
      We do not unsubscribe here :(
      We have memory leaks :(
        Sadness
          :(

      <!-- The IP address we received - <span class="red">{{ data?.origin }}</span> -->
      {{ data }}
    </pre>
  `,
  styleUrls: ['./app.component.scss']
  
})
export class NoUnsubscribeComponent implements OnInit, OnDestroy {
  // data: IIpData;
  data: any;
  subscription: Subscription;
  // private componentDestroy$: Subject<void> = new Subject<void>();
  private componentDestroy$: ReplaySubject<void> = new ReplaySubject<void>();


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.subscription = this.http.get('')
      .subscribe((_) => this.data = _);
    
    // const new_sub = this.http.get('').pipe(
    //   first(),
    // )
    // .subscribe((_) => this.data = _);
    
    // this.subscription.add(new_sub)
  }

  // ngOnInit(): void {
  //   this.http.get('http://httpbin.org/ip')
  //     .subscribe((response: IIpData) => this.data = response);
  // }

  ngOnDestroy(): void {
    this.componentDestroy$.next();
    this.componentDestroy$.complete();
  }

}
