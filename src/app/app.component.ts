import { Component, OnInit } from '@angular/core';
import { WordType } from './features/word-types/word-type-model';
import { WordTypesService } from './features/word-types/word-types.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gitassessment';

  constructor(private wordTypesService: WordTypesService) {
  }

  selectedWordType!: WordType;

  ngOnInit() {
    this.wordTypesService.$selectedWordType.subscribe(wordType => this.selectedWordType = wordType);
  }

}
