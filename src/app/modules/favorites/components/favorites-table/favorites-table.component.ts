import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ICharacter } from 'src/app/models';
import { FavoritesService } from 'src/app/services/favorites.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-favorites-table',
  templateUrl: './favorites-table.component.html',
  styleUrls: ['./favorites-table.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    CommonModule,
    MatIconModule,
  ],
})
export class FavoritesTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'stories', 'series', 'removed'];
  dataSource: MatTableDataSource<ICharacter> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private favoritesService: FavoritesService) {}

  ngAfterViewInit(): void {
    this.favoritesService.getFavoriteCharacter.subscribe(
      (characters: ICharacter[]) => {
        this.dataSource = new MatTableDataSource(characters);
        console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.favoritesService.getFavoriteCharacter.subscribe();
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  favorite(char: ICharacter) {
    this.favoritesService.addFavoriteCharacter(char);
  }

  removed(char: ICharacter) {
    this.favoritesService.removeFavoriteCharacter(char);
  }
}