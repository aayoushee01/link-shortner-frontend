import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LinkService } from '../services/link.service';
@Component({
  selector: 'app-url-table',
  templateUrl: './url-table.component.html',
  styleUrls: ['./url-table.component.scss']
})
export class UrlTableComponent {
  @Input() tableData: any[] = [];

  columns: string[] = ['bigURL', 'smallURL', 'clicks', 'expiry'];

  sortColumn: string = '';
  sortDirection: string = '';

  constructor(private linkService : LinkService) {
  }
  ngOnInit(): void {
    // this.sortedData = this.tableData.slice();
  }


  @Output() showAnalytics = new EventEmitter<any>();
  viewAnalytics(item: any): void {
    console.log("Inside View Analytics");
    this.showAnalytics.emit(item);
  }
}
