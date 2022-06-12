import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreManchesComponent } from './nombre-manches.component';

describe('NombreManchesComponent', () => {
  let component: NombreManchesComponent;
  let fixture: ComponentFixture<NombreManchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NombreManchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NombreManchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
