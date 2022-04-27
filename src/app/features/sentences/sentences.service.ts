import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/common/http/http.service';
import { Sentence } from './sentence-model';
import { SubmitSentence } from './submit-sentence-model';

@Injectable({
  providedIn: 'root'
})
export class SentencesService {

  constructor(private httpService: HttpService) { }

  getAll() {
    return this.httpService.get<Sentence[]>('sentences');
  }

  submit(sentence: SubmitSentence): Observable<Sentence> {
    return this.httpService.post<Sentence>('sentences', sentence);
  }
}
