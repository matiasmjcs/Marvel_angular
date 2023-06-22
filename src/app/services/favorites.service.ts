import { Injectable } from '@angular/core';
import { ICharacter, IComic } from '../models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favoritesCharacter: Array<ICharacter | IComic> = [];
  private _favoritesCharacter: BehaviorSubject<Array<ICharacter | IComic>> =
    new BehaviorSubject<Array<ICharacter | IComic>>([]);
  constructor() {}
  addFavorite(favorite: ICharacter | IComic) {
    if (!this.favoritesCharacter.find((f) => f.id === favorite.id)) {
      this.favoritesCharacter.push(favorite);
      this._favoritesCharacter.next(this.favoritesCharacter);
    }
  }

  get getFavorite() {
    return this._favoritesCharacter.asObservable();
  }

  removeFavorite(favorite: ICharacter | IComic) {
    this.favoritesCharacter = this.favoritesCharacter.filter(
      (f) => f.id !== favorite.id
    );
    this._favoritesCharacter.next(this.favoritesCharacter);
  }

  isFavoriteCharacter(favorite: ICharacter | IComic) {
    return this.favoritesCharacter.find((f) => f.id === favorite.id) ? true : false;
  }
}
