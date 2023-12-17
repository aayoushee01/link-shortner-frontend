import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { LinkService } from '../services/link.service';
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit, AfterViewInit, OnChanges {
  hourlyErrorRates: any[] = [
    { hour: '00:00', error: '100' },
  ];
  startTime: string = '';
  endTime: string = '';
  @Input() selectedItemForAnalytics: any;
  
  onSubmit(): void {
    this.fetchAnalyticsData();
    this.createBarChart();
    console.log(this.hourlyErrorRates);
  }
  
  @ViewChild('errorRatesChart', { static: false }) chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart: any;
  constructor(private linkService: LinkService) {
    Chart.register(...registerables);
  }
  ngOnInit(): void {
    this.fetchAnalyticsData();
  }
  ngAfterViewInit(): void {
    this.createBarChart();
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Inside ONCHANGES", this.selectedItemForAnalytics);
    this.fetchAnalyticsData();
  }
  createBarChart(): void {
    const ctx = this.chartCanvas.nativeElement;
    if (!ctx) {
      console.error('Canvas element not found');
      return;
    }
    if (this.chart) {
      this.chart.destroy();
    }
    const errorCounts = this.hourlyErrorRates.map(item => +item.error);
    console.log(errorCounts);
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.hourlyErrorRates.map(item => item.hour),
        datasets: [{
          label: 'Hourly Error Rates',
          data: errorCounts,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
  fetchAnalyticsData(): void {
    if (this.selectedItemForAnalytics && this.selectedItemForAnalytics.id) {
      const linkId = this.selectedItemForAnalytics.id;
      let start = new Date().toISOString();
      let end = new Date().toISOString();
      if(this.startTime != '')
        start = this.startTime
      if(this.endTime != '')
        end = this.endTime
      this.linkService.getAnalyticsData(linkId, start, end).subscribe(
        (data) => {
          console.log(data);
          this.hourlyErrorRates = data;
          this.createBarChart();
        },
        (error) => {
          console.error('Error fetching links for user:', error);
        }
      );
    }
  }
}

