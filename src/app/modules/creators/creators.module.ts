import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatorsComponent } from './creators.component';
import { CreatorsRoutingModule } from './creators-routing.module';
import { CreatorsTableComponent } from './components';



@NgModule({
  declarations: [CreatorsComponent],
  imports: [CommonModule, CreatorsRoutingModule, CreatorsTableComponent],
})
export class CreatorsModule {}
