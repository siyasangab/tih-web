import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordTypeSelectComponent } from './word-type-select.component';

describe('WordTypeSelectComponent', () => {
  let component: WordTypeSelectComponent;
  let fixture: ComponentFixture<WordTypeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordTypeSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordTypeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
