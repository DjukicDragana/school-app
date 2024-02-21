import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public header = 'Raspored';
  public additionalInfo = 'Danas je ponedeljak 19.02.2024.';
  public additionalInformation = 'Ove nedelje si prva smena';

}
