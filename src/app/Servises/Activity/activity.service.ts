import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private Url: string = environment.todosBASE_URL;

  constructor(private http: HttpClient) { }

  getActivities(): Observable<any[]> {
    return this.http.get<any[]>(this.Url);
  }
}
