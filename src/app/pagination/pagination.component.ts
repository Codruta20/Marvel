import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() currentPage;
  @Input() numberPages;
  @Input() pageSize;
  @Output() pageEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  selectPage(page) {
    this.pageEvent.emit(page);
  }
}
