import { Component, OnInit } from '@angular/core';
import { Sentence } from './features/sentences/sentence-model';
import { SentencesService } from './features/sentences/sentences.service';
import { SubmitSentence } from './features/sentences/submit-sentence-model';
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

  sentences!: Sentence[];

  get wordsSectionVisible() {
    return this.selectedWordType && this.words.length > 0;
  }

  constructor(private wordTypesService: WordTypesService, 
    private wordsService: WordsService, 
    private sentencesService: SentencesService) {
  }

  ngOnInit() {
    this.wordTypesService.$selectedWordType.subscribe(wordType => {
      this.selectedWordType = wordType;
      this.getWordsByWordType();
    });

    this.sentencesService.getAll().subscribe((sentences) => {
      this.sentences = sentences;
    })
  }

  getWordsByWordType() {
    this.wordsService.getByWordType(this.selectedWordType?.id)
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

  submitSentence() {
    this.sentencesService.submit(new SubmitSentence(this.sentence)).subscribe((response) => {
      this.sentences.unshift(response);
      alert('You sentence was published successfully');
      this.words = [];
      this.selectedWordType = new WordType();
      this.sentence = '';
    })
  }
}
