import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WordType } from '../word-type-model';
import { WordTypesService } from '../word-types.service';

@Component({
  selector: 'app-word-type-select',
  templateUrl: './word-type-select.component.html',
  styleUrls: ['./word-type-select.component.css']
})
export class WordTypeSelectComponent implements OnInit {
  wordTypes: WordType[] = [];

  constructor(private wordTypesService: WordTypesService) { }

  ngOnInit(): void {
    this.wordTypesService.getAll()
      .subscribe(x => this.wordTypes = [...x]);
  }

  onWordTypeChanged($event: any) {
    const wordType = this.wordTypes.find(x => x.id.toString() === $event.target.value) as WordType;
    this.wordTypesService.$selectedWordType.next(wordType)
  }
}
