import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';
import {LayoutModule} from './layout/layout.module';
import {CharactersModule} from './characters/characters.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    CharactersModule,
    FlexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
