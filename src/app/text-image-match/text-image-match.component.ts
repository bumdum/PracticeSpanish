import { Component, OnInit } from '@angular/core';
import { Translate, TranslateService } from '../shared';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-text-image-match',
  templateUrl: './text-image-match.component.html',
  styleUrls: ['./text-image-match.component.css']
})
export class TextImageMatchComponent implements OnInit {
  translations: Translate[];
  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.translateService.getAll().subscribe( translate => this.translations = translate);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      console.log(` data: ${event.container} previousIndex: ${event.previousIndex} currentIndex: ${event.currentIndex}`);
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event.previousContainer);
      console.log(event.container);
      console.log(`previousIndex: ${event.previousIndex} currentIndex: ${event.currentIndex}`);
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  /** Predicate function that only allows even numbers to be dropped into a list. */
  evenPredicate(item: CdkDrag<number>) {
    console.log(item.data);
    return true;//item.data === 6;
  }

  /** Predicate function that doesn't allow items to be dropped into a list. */
  noReturnPredicate() {
    return true;
  }

}
