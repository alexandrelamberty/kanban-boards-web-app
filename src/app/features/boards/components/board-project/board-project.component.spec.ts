import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardProjectComponent } from './board-project.component';

describe('BoardPRojectComponent', () => {
  let component: BoardProjectComponent;
  let fixture: ComponentFixture<BoardProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardProjectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BoardProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
