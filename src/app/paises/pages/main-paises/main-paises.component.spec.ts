import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPaisesComponent } from './main-paises.component';

describe('MainPaisesComponent', () => {
  let component: MainPaisesComponent;
  let fixture: ComponentFixture<MainPaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPaisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
