import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompairViewComponent } from './compair-view.component';

describe('CompairViewComponent', () => {
  let component: CompairViewComponent;
  let fixture: ComponentFixture<CompairViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompairViewComponent]
    });
    fixture = TestBed.createComponent(CompairViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
