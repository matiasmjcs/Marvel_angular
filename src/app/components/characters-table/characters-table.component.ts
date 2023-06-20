import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ICharacter } from 'src/app/models';
import { MarvelService } from 'src/app/services/marvel.service';
import { FavoritesService } from 'src/app/services/favorites.service';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-characters-table',
  templateUrl: './characters-table.component.html',
  styleUrls: ['./characters-table.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    CommonModule,
  ],
})
export class CharactersTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'stories', 'series', 'favorites'];
  dataSource: MatTableDataSource<ICharacter> = new MatTableDataSource();
  characters: ICharacter[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.marvelService.getCharacter().subscribe((data: any) => {
      this.characters = data.data.results;
      this.dataSource = new MatTableDataSource(this.characters);
      console.log(this.dataSource);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  constructor(
    private marvelService: MarvelService,
    private favoritesService: FavoritesService
  ) {}

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

  isFavorite(char: ICharacter) {
    return this.favoritesService.isFavoriteCharacter(char);
  }
  removed(char: ICharacter) {
    this.favoritesService.removeFavoriteCharacter(char);
  }
}