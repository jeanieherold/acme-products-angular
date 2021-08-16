import {
  Component,
  Input,
  OnChanges,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponet implements OnChanges {
  @Input() rating: number = 0;
  cropWidth: number = 90;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.cropWidth = this.rating * (90 / 5);
  }

  onClick(): void {
    //emit event to the parent commponent
    this.ratingClicked.emit(`the rating ${this.rating} was clicked!`);
  }
}
