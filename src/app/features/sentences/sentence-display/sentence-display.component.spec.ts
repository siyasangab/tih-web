import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceDisplayComponent } from './sentence-display.component';

describe('SentenceDisplayComponent', () => {
  let component: SentenceDisplayComponent;
  let fixture: ComponentFixture<SentenceDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentenceDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentenceDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
