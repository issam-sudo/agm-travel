import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { AgmTravelComponent } from './agm-travel/agm-travel.component';
import { ToastrModule } from 'ngx-toastr';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
 

@NgModule({
  declarations: [
    AppComponent,
    AgmTravelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAkCkK4N39fnuq86Fk0risyGhA8rMRBkZU'
    }),
    ToastrModule.forRoot({   positionClass: 'toast-bottom-left', progressBar: true}),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
