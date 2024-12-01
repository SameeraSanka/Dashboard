import { Component, OnInit } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { ChartDataService } from '../../Servises/ChartData/chart-data.service';

@Component({
  selector: 'app-data-trends',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './data-trends.component.html',
  styleUrls: ['./data-trends.component.css'],
})
export class DataTrendsComponent implements OnInit {
  Highcharts = Highcharts;

  chartOptionsUserRegistration: Highcharts.Options = {};
  chartOptionsActivityCount: Highcharts.Options = {};

  constructor(private chartDataService: ChartDataService) {}

  ngOnInit(): void {
    this.loadUserRegistrationData();
    this.loadActivityCountData();
  }

  loadUserRegistrationData(): void {
    this.chartDataService.getUserRegistrationData().subscribe((data) => {
      this.chartOptionsUserRegistration = {
        chart: {
          type: 'line',
        },
        title: {
          text: 'User Registrations Over Time',
        },
        xAxis: {
          categories: data.categories,
        },
        series: [
          {
            type: 'line',
            name: 'Registrations',
            data: data.data,
          },
        ],
      };
    });
  }

  loadActivityCountData(): void {
    this.chartDataService.getActivityCountData().subscribe((data) => {
      this.chartOptionsActivityCount = {
        chart: {
          type: 'bar',
        },
        title: {
          text: 'Activity Counts per User',
        },
        xAxis: {
          categories: data.categories,
        },
        series: [
          {
            type: 'bar',
            name: 'Activities',
            data: data.data,
            colorByPoint: true,  
            colors: ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#FFD733'],  
          },
        ],
      };
    });
  }
  
}
