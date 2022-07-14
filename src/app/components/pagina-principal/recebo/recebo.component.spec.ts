import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceboComponent } from './recebo.component';

describe('ReceboComponent', () => {
  let component: ReceboComponent;
  let fixture: ComponentFixture<ReceboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
