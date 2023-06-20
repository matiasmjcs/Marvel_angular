import { Injectable } from '@angular/core';
import { ICharacter } from '../models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favoritesCharacter: ICharacter[] = [];
  private _favoritesCharacter: BehaviorSubject<ICharacter[]> =
    new BehaviorSubject<ICharacter[]>([]);
  constructor() {}
  addFavoriteCharacter(character: ICharacter) {
    if (!this.favoritesCharacter.find((c) => c.id === character.id)) {
      this.favoritesCharacter.push(character);
      this._favoritesCharacter.next(this.favoritesCharacter);
    }
  }

  get getFavoriteCharacter() {
    return this._favoritesCharacter.asObservable();
  }

  removeFavoriteCharacter(character: ICharacter) {
    this.favoritesCharacter = this.favoritesCharacter.filter(
      (c) => c.id !== character.id
    );
    this._favoritesCharacter.next(this.favoritesCharacter);
  }

  isFavoriteCharacter(char: ICharacter) {
    return this.favoritesCharacter.find((c) => c.id === char.id) ? true : false;
  }
}
