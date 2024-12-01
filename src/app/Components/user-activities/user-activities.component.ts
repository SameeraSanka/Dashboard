import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../Servises/Activity/activity.service';
import { CommonModule } from '@angular/common';
import { Activity } from '../../Models/Activity ';
 // Import the Activity model

@Component({
  selector: 'app-user-activities',
  standalone: true,
  templateUrl: './user-activities.component.html',
  styleUrls: ['./user-activities.component.css'],
  imports: [CommonModule]
})
export class UserActivitiesComponent implements OnInit {

  activities: Activity[] = []; 
  paginatedActivities: Activity[] = []; 
  currentPage: number = 1;  
  totalPages: number = 1;  
  pageSize: number = 5;  

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.fetchActivities();
  }

  fetchActivities(): void {
    this.activityService.getActivities().subscribe(data => {
      this.activities = data;
      console.log(data)
      this.totalPages = Math.ceil(this.activities.length / this.pageSize);
      this.updatePaginatedActivities();
    });
  }

  updatePaginatedActivities(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.paginatedActivities = this.activities.slice(startIndex, startIndex + this.pageSize);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedActivities();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedActivities();
    }
  }
}
