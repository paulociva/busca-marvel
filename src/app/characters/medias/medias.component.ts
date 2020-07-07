import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../characters.model';
import {MediasService} from './medias.service';
import {Observable} from 'rxjs';
import {Media} from './medias';

@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html',
  styleUrls: ['./medias.component.scss']
})
export class MediasComponent implements OnInit {

  @Input() character: Character;
  $medias: Observable<Media[]>;

  constructor(
    private _mediasService: MediasService
  ) {
  }

  ngOnInit(): void {
    this.$medias = this._mediasService.getMediasOfCharacter(this.character);
  }
}
