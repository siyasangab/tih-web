import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WordType } from '../word-type-model';
import { WordTypesService } from '../word-types.service';

@Component({
  selector: 'app-word-type-select-original',
  templateUrl: './word-type-select.component.html',
  styleUrls: ['./word-type-select.component.css']
})
export class WordTypeSelectComponent implements OnInit {
  @Output() wordTypeChangedEvent = new EventEmitter<WordType>();

  wordTypes: WordType[] = [];

  constructor(private wordTypesService: WordTypesService) { }

  ngOnInit(): void {
    this.wordTypesService.getAll()
      .subscribe(x => this.wordTypes = [...x]);
  }

  onWordTypeChanged($event: any) {
    const wordType = this.wordTypes.find(x => x.id.toString() === $event.target.value);
    this.wordTypeChangedEvent.emit(wordType);
  }

}
