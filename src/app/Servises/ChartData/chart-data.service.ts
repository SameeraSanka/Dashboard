import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChartDataService {
  getUserRegistrationData(): Observable<{ categories: string[]; data: number[] }> {
    return of({
      categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      data: [30, 50, 60, 70, 90, 120, 150],
    });
  }

  getActivityCountData(): Observable<{ categories: string[]; data: number[] }> {
    return of({
      categories: ['User 1', 'User 2', 'User 3', 'User 4', 'User 5'],
      data: [5, 10, 8, 12, 7],
    });
  }
}
