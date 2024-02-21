import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() headerText: string = '';
  @Input() additionalInfo: string = '';
  @Input() additionalInformation: string = '';

  public rows = [1, 2, 3, 4, 5, 6];
  public columns = [1, 2, 3, 4, 5];

}
