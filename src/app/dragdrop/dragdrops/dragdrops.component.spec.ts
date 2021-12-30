import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragdropsComponent } from './dragdrops.component';

describe('DragdropsComponent', () => {
  let component: DragdropsComponent;
  let fixture: ComponentFixture<DragdropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragdropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragdropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
