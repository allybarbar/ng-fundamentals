import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes} from './routes';
import { Router, RouterModule } from '@angular/router';
import { Error404Component} from './errors/404.component';
import {
  EventRouteActivator,
  EventListResolver,
  CreateEventComponent,
  EventService,
  EventThumbnailComponent,
  EventsListComponent  
} from './events/index'
import {AuthService} from './user/auth.service'

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavbarComponent,
    CreateEventComponent,
    Error404Component
        
  ],
  providers: [
    EventService, 
    ToastrService, 
    EventRouteActivator,
    EventListResolver,
    {
      provide : 'canDeactivateCreateEvent', useValue: checkDirtyState
     },
     AuthService
  ],

  bootstrap: [EventsAppComponent]

})
export class AppModule { }
export function checkDirtyState (component:CreateEventComponent)
{
  if (component.isDirty)
    return window.confirm('Is not saved, continue? ')

  return true;
}