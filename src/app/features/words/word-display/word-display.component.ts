import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Word } from '../word-model';

@Component({
  selector: 'app-word-display',
  templateUrl: './word-display.component.html',
  styleUrls: ['./word-display.component.css']
})
export class WordDisplayComponent implements OnInit {
  @Input('word') word!: Word;

  @Output() wordSelectedEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onWordSelected() {
    this.wordSelectedEvent.emit(this.word.title);
  }

}
