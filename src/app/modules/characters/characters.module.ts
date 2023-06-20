import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { CharactersTableComponent } from 'src/app/components/characters-table/characters-table.component';

@NgModule({
  declarations: [CharactersComponent],
  imports: [
    HttpClientModule,
    CharactersRoutingModule,
    CommonModule,
    CharactersTableComponent
  ],
})
export class CharactersModule {}
