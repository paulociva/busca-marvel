import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CharactersComponent} from './characters.component';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {LayoutModule} from '../layout/layout.module';
import {MediasComponent} from './medias/medias.component';


@NgModule({
  declarations: [
    CharactersComponent,
    MediasComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    FlexModule,
    LayoutModule,
    FlexLayoutModule,
  ],
  exports: [CharactersComponent]
})
export class CharactersModule {
}
