import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MarvelService } from 'src/app/services/marvel.service';
import { IComic } from 'src/app/models';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-comics-table',
  templateUrl: './comics-table.component.html',
  styleUrls: ['./comics-table.component.scss'],
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
export class ComicsTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['title', 'characters', 'stories', 'favorites'];
  dataSource: MatTableDataSource<IComic> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private marvelService: MarvelService,
    private favoritesService: FavoritesService
  ) {}

  ngAfterViewInit(): void {
    this.marvelService.getMarvelService('comics').subscribe((comics: any) => {
      console.log(comics.data.results);
      this.dataSource = new MatTableDataSource(comics.data.results);
      console.log(this.dataSource);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  favorite(c: IComic) {
    this.favoritesService.addFavorite(c);
  }

  isFavorite(c: IComic) {
    return this.favoritesService.isFavoriteCharacter(c);
  }
  removed(c: IComic) {
    this.favoritesService.removeFavorite(c);
  }
}