import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompairComponent } from './compair.component';

describe('CompairComponent', () => {
  let component: CompairComponent;
  let fixture: ComponentFixture<CompairComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompairComponent]
    });
    fixture = TestBed.createComponent(CompairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
