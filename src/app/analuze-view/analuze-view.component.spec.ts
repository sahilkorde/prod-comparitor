import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaluzeViewComponent } from './analuze-view.component';

describe('AnaluzeViewComponent', () => {
  let component: AnaluzeViewComponent;
  let fixture: ComponentFixture<AnaluzeViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnaluzeViewComponent]
    });
    fixture = TestBed.createComponent(AnaluzeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
