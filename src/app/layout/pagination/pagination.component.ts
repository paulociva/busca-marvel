import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {MediaObserver} from '@angular/flex-layout';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() page: number;
  @Input() count: number;
  @Input() perPage: number;

  @Output() goToPage = new EventEmitter<number>();

  pagesToShow: BehaviorSubject<number>;

  constructor(private _mediaObserver: MediaObserver) {
    this.pagesToShow = new BehaviorSubject(6);
  }

  ngOnInit(): void {
    this._mediaObserver.asObservable().subscribe(
      () => this._mediaObserver.isActive('lt-sm') ?
        this.pagesToShow.next(3) :
        this.pagesToShow.next(6));
  }

  onPage(n: number): void {
    if (n < 1 || n > Math.ceil(this.count / this.perPage)) {
      return;
    }
    this.page = n;
    this.goToPage.emit(n);
  }

  getPages(): number[] {
    const totalPages = Math.ceil(this.count / this.perPage);
    const thisPage = this.page || 1;
    const pageToShow = this.pagesToShow.value || 9;
    const pages: number[] = [];
    pages.push(thisPage);
    for (let i = 0; i < pageToShow - 1; i++) {
      if (pages.length < pageToShow) {
        if (Math.min.apply(null, pages) > 1) {
          pages.push(Math.min.apply(null, pages) - 1);
        }
      }
      if (pages.length < pageToShow) {
        if (Math.max.apply(null, pages) < totalPages) {
          pages.push(Math.max.apply(null, pages) + 1);
        }
      }
    }
    pages.sort((a, b) => a - b);

    return pages;
  }

}
