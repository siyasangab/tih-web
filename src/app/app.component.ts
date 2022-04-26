import { Component, OnInit } from '@angular/core';
import { WordType } from './features/word-types/word-type-model';
import { WordTypesService } from './features/word-types/word-types.service';
import { Word } from './features/words/word-model';
import { WordsService } from './features/words/words.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gitassessment';

  selectedWordType!: WordType;

  words: Word[] = [];

  sentence: string = '';

  searchText: string = '';

  get wordsSectionVisible() {
    return this.selectedWordType && this.words.length > 0;
  }

  constructor(private wordTypesService: WordTypesService, private wordsService: WordsService) {
  }

  ngOnInit() {
    this.wordTypesService.$selectedWordType.subscribe(wordType => {
      this.selectedWordType = wordType;
      this.getWordsByWordType();
    });
  }

  getWordsByWordType() {
    this.wordsService.getByWordType(this.selectedWordType.id)
      .subscribe((words) => {
        this.words = words;
      })
  }

  handleWordSelected(word: string) {
    const isExclamation = word === '!';

    let append = isExclamation ? word : ` ${word}`;  

    if (this.sentence.length === 0 || this.sentence.slice(0, -1) === '!') {
      this.sentence += append;
      return;
    }

    this.sentence += append.toLowerCase();
  }
}
