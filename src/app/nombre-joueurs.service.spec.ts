import { TestBed } from '@angular/core/testing';

import { NombreJoueursService } from './nombre-joueurs.service';

describe('NombreJoueursService', () => {
  let service: NombreJoueursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NombreJoueursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
