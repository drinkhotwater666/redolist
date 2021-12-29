import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragdropsHeaderComponent } from './dragdrops-header.component';

describe('DragdropsHeaderComponent', () => {
  let component: DragdropsHeaderComponent;
  let fixture: ComponentFixture<DragdropsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DragdropsHeaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragdropsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
