import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicsTableComponent } from './comics-table.component';

describe('ComicsTableComponent', () => {
  let component: ComicsTableComponent;
  let fixture: ComponentFixture<ComicsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComicsTableComponent],
    });
    fixture = TestBed.createComponent(ComicsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
