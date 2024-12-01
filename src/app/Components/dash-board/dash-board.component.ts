import { Component } from '@angular/core';
import { UserStatisticsComponent } from "../user-statistics/user-statistics.component";
import { DataTrendsComponent } from "../data-trends/data-trends.component";
import { UserActivitiesComponent } from '../user-activities/user-activities.component';


@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [UserStatisticsComponent, DataTrendsComponent, UserActivitiesComponent],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent {

}
