import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsRoutingModule } from './comics-routing.module';
import { ComicsComponent } from './comics.component';
import { ComicsTableComponent } from './components';


@NgModule({
  declarations: [ComicsComponent],
  imports: [CommonModule, ComicsRoutingModule, ComicsTableComponent],
  exports: [],
  providers: [],
})
export class ComicsModule {}