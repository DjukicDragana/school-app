import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  public rows = [1, 2, 3, 4, 5, 6];
  public columns = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

}
