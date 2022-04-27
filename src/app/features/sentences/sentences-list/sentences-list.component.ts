import { Component, Input, OnInit } from '@angular/core';
import { Sentence } from '../sentence-model';

@Component({
  selector: 'app-sentences-list',
  templateUrl: './sentences-list.component.html',
  styleUrls: ['./sentences-list.component.css']
})
export class SentencesListComponent implements OnInit {
  @Input('sentences') sentences!: Sentence[];

  constructor() { }

  ngOnInit(): void {
  }

}
