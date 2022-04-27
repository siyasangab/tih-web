import { Component, Input, OnInit } from '@angular/core';
import { Sentence } from '../sentence-model';

@Component({
  selector: 'app-sentence-display',
  templateUrl: './sentence-display.component.html',
  styleUrls: ['./sentence-display.component.css']
})
export class SentenceDisplayComponent implements OnInit {
  @Input('sentence') sentence!: Sentence;

  constructor() { }

  ngOnInit(): void {
  }

}
