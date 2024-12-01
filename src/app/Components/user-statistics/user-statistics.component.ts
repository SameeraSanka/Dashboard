import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Servises/User/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-statistics.component.html',
  styleUrls: ['./user-statistics.component.css'],
})
export class UserStatisticsComponent implements OnInit {
  totalUsers = 0;
  activeUsers = 0;
  usersByLocation: { [key: string]: number } = {};

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.totalUsers = users.length;

      this.activeUsers = users.filter((user) => user.id % 2 === 0).length;

      this.usersByLocation = users.reduce((acc: any, user: any) => {
        const city = user.address.city;
        acc[city] = acc[city] ? acc[city] + 1 : 1;
        return acc;
      }, {});
    });
  }

  splitCities(usersByLocation: { [key: string]: number }) {
    const cities = Object.keys(usersByLocation);

    const first2Cities = cities.slice(0, 2);

    return first2Cities;
  }

}
