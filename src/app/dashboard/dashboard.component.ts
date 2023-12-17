import { Component, OnInit,Output } from '@angular/core';
import { LinkService } from '../services/link.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userId: number = 0;
  links: any;
  @Output() yourTableData: any[] = [];
  @Output() selectedItem: any;

  setSelectedItem(item: any): void {
    console.log("Inside Set Selected Item");
    this.selectedItem = item;
  }
  constructor(private linkService: LinkService) { }

  ngOnInit(): void {
    this.fetchLinksForUser();
  }
  fetchLinksForUser(): void {
    this.linkService.getAllLinksForUser().subscribe(
      (data) => {
        console.log(data);
        this.yourTableData = data;
      },
      (error) => {
        console.error('Error fetching links for user:', error);
      }
    );
  }

  loadLinksForUser(): void {
    this.linkService.getUser().subscribe(
      (data) => {
        this.links = data;
      },
      (error) => {
        console.error('Error fetching links:', error);
      }
    );
  }
}
