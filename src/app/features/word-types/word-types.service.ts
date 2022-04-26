import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpService } from '../../common/http/http.service';
import { WordType } from './word-type-model';

@Injectable({
  providedIn: 'root'
})
export class WordTypesService {
  private wordTypesUrl = 'word-types';

  constructor(private httpService: HttpService) { }

  $selectedWordType: Subject<WordType> = new Subject<WordType>();

  getAll(): Observable<WordType[]> {
    return this.httpService.get(this.wordTypesUrl);
  }

  setSelected(wordType: WordType) {
    this.$selectedWordType.next(wordType);
  }
}
