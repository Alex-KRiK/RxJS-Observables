import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AsyncComponent } from './async.component';
import { NoUnsubscribeComponent } from './no-unsubscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    AsyncComponent,
    NoUnsubscribeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: []
})
export class AppModule { }
