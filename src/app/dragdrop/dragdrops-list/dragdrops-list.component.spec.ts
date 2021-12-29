import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragdropsListComponent } from './dragdrops-list.component';

describe('DragdropsListComponent', () => {
  let component: DragdropsListComponent;
  let fixture: ComponentFixture<DragdropsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragdropsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragdropsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
