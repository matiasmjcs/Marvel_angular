import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';
import { ICharacter } from '../../models';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  providers: [MarvelService],
})
export class CharactersComponent implements OnInit {
  data!: ICharacter[];
  constructor(public marvelService: MarvelService, private favoritesService: FavoritesService) {}
  ngOnInit(): void {
    this.marvelService.getCharacter().subscribe((data: any) => {
      this.data = data.data.results;
    });
  }
  favorite(char: ICharacter) {
    this.favoritesService.addFavoriteCharacter(char);
  }
}
