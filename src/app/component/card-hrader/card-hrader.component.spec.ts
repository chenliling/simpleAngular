import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHraderComponent } from './card-hrader.component';

describe('CardHraderComponent', () => {
  let component: CardHraderComponent;
  let fixture: ComponentFixture<CardHraderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHraderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHraderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
