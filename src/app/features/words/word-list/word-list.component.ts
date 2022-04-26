import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Word } from '../word-model';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {

  @Input('words') words: Word[] = [];

  @Output() wordSelectedEvent = new EventEmitter<string>();

  searchText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  handleWordSelected(word: string) {
    this.wordSelectedEvent.emit(word);
  }

}
