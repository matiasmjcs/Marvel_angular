import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { EventsTableComponent } from './components';
import { EventsRoutingModule } from './events-routing.module';



@NgModule({
  declarations: [EventsComponent],
  imports: [CommonModule, EventsTableComponent, EventsRoutingModule],
})
export class EventsModule {}
