import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatorsTableComponent } from './creators-table.component';

describe('CreatorsTableComponent', () => {
  let component: CreatorsTableComponent;
  let fixture: ComponentFixture<CreatorsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatorsTableComponent],
    });
    fixture = TestBed.createComponent(CreatorsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
