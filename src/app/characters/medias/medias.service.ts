import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

import {Character} from '../characters.model';
import {Media, MediaCharacters, MediaCharactersResponse} from './medias';

@Injectable({
  providedIn: 'root'
})
export class MediasService {

  constructor(private httpClient: HttpClient) {
  }

  getMediasOfCharacter(character: Character): Observable<Media[]> {
    return this.getMediaCharactersByCharacter(character)
      .pipe(map((mediaCharactersResponse: MediaCharactersResponse) => mediaCharactersResponse.data),
        switchMap((mediaCharactersList: MediaCharacters[]) => {
          const mcl = mediaCharactersList.map((mc) => this.getMediaByMediaCharacters(mc));
          return forkJoin(mcl);
        })
      );
  }

  getMediaByMediaCharacters(mediaCharacters: MediaCharacters): Observable<Media> {
    return this.httpClient.get(mediaCharacters.relationships.media.links.related)
      .pipe(map((response: { data: Media }) => {
        return (response.data);
      }));
  }

  getMediaCharactersByCharacter(character: Character): Observable<MediaCharactersResponse> {
    return this.httpClient.get(character.relationships.mediaCharacters.links.related)
      .pipe(map((response: MediaCharactersResponse) => {
        return (response);
      }));
  }
}
