import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { LinkService } from '../services/link.service';
@Component({
  selector: 'app-url-shortner',
  templateUrl: './link-shortner.component.html',
  styleUrls: ['./link-shortner.component.scss']
})
export class LinkShortner  {
  bigUrl: string = '';
  smallUrl: string = '';
  copied: boolean = false;

  constructor(private clipboardService: ClipboardService, private linkService: LinkService) {}

  generateSmallUrl(): void {
    this.linkService.createLinkForUser(this.bigUrl).subscribe(
      (data) => {
        console.log('Response data:', data);
        this.smallUrl = data.short_url;
      },
      (error) => {
        console.error('Error fetching links:', error);
      }
    );;
  }

  copyToClipboard(): void {
    this.clipboardService.copyFromContent(this.smallUrl);
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 3000); // Reset copied message after 3 seconds
  }
}
