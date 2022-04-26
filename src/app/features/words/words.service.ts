import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/common/http/http.service';
import { Word } from './word-model';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  private wordsUrl = 'words';

  constructor(private httpService: HttpService) { }

  getByWordType(wordTypeId: number): Observable<Word[]> {
    return this.httpService.get<Word[]>(`${this.wordsUrl}/by-type?wordTypeId=${wordTypeId}`)
  }
}
