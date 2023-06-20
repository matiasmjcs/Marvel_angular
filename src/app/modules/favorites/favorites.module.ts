import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesTableComponent } from "./components/favorites-table/favorites-table.component";

@NgModule({
    declarations: [FavoritesComponent],
    imports: [CommonModule, FavoritesRoutingModule, CommonModule, FavoritesTableComponent]
})
export class FavoritesModule {}
