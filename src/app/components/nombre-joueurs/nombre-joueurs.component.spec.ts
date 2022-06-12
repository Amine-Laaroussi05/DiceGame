import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreJoueursComponent } from './nombre-joueurs.component';

describe('NombreJoueursComponent', () => {
  let component: NombreJoueursComponent;
  let fixture: ComponentFixture<NombreJoueursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NombreJoueursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NombreJoueursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
