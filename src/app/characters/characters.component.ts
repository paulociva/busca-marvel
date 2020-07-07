import {Component, OnInit} from '@angular/core';
import {CharactersService} from './characters.service';
import {BehaviorSubject, merge, Observable} from 'rxjs';
import {Character, CharactersResponse} from './characters.model';
import {distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  $charactersResponse: Observable<CharactersResponse>;

  searchText: BehaviorSubject<string>;
  page: BehaviorSubject<number>;
  openedMedias: BehaviorSubject<number[]>;

  constructor(
    private charactersService: CharactersService
  ) {
    this.searchText = new BehaviorSubject('');
    this.page = new BehaviorSubject(1);
    this.openedMedias = new BehaviorSubject([]);
  }

  ngOnInit(): void {
    this.$charactersResponse = merge(
      this.searchText,
      this.page.pipe(distinctUntilChanged()))
      .pipe(
        switchMap(() => {
          return this.charactersService.getCharacters(this.searchText.value, (this.page.value - 1) * 10);
        })
      );
  }

  onSearchTextChange(text: string): void {
    this.searchText.next(text);
    this.page.next(1);
  }

  onPageChange(page: number): void {
    this.page.next(page);
  }

  toggleMedia(character: Character): void {
    const newOpenedMedias = this.openedMedias.value.includes(character.id) ?
      this.openedMedias.value.filter(value => value !== character.id) :
      [...this.openedMedias.value, character.id];
    this.openedMedias.next(newOpenedMedias);
  }
}
