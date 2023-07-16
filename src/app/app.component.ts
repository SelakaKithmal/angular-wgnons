import {
  Component,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnChanges,
  OnDestroy,
  OnInit,
  DoCheck,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  getArray(): string[] {
    //here i know when this function is called
    console.log('getArray called');

    return ['number one', 'number two'];
  }

  getArray1(arr, index) {
    return this.customSliceAndMoveItems(['a', 'b', 'c', 'd'], 2);
  }

  customSliceAndMoveItems(array, startIndex) {
    return array.slice(startIndex).concat(array.slice(0, startIndex));
  }
}
