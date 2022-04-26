import { Pipe, PipeTransform } from '@angular/core';
import { Word } from './words/word-model';

@Pipe({
  name: 'wordFilter'
})
export class FilterPipe implements PipeTransform {

  transform(words: Word[], searchText: string): Word[] {
    if (!words) {
      return [];
    }
    if (!searchText) {
      return words;
    }
    searchText = searchText.toLocaleLowerCase();

    return words.filter(word => {
      return word.title.toLocaleLowerCase().includes(searchText);
    });
  }

}
