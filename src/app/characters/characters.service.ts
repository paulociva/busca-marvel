import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from '../../environments/environment';
import {CharactersResponse} from './characters.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private httpClient: HttpClient) {
  }

  getCharacters(filterTerm: string, offset: number): Observable<CharactersResponse> {
    filterTerm = filterTerm !== '' ? ('?filter[name]=' + filterTerm + '&') : '?';

    return this.httpClient.get(environment.kitsuAPI + '/characters' + filterTerm + 'page[offset]=' + offset)
      .pipe(map((response: CharactersResponse) => {
        return (response);
      }));
  }
}
