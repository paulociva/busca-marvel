import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';

import {HeaderComponent} from './header/header.component';
import {SearchComponent} from './search/search.component';
import {PaginationComponent} from './pagination/pagination.component';
import {LoadingComponent} from './loading/loading.component';
import {ArrayFilterByValuePipe} from './pipes/array-filter-by-value.pipe';

@NgModule({
  declarations: [
    ArrayFilterByValuePipe,
    HeaderComponent,
    LoadingComponent,
    PaginationComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FlexModule,
    FlexLayoutModule
  ],
  exports: [
    ArrayFilterByValuePipe,
    HeaderComponent,
    LoadingComponent,
    PaginationComponent,
    SearchComponent
  ]
})
export class LayoutModule {
}
