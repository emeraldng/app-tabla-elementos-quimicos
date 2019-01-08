import { TestBed } from '@angular/core/testing';

import { ElementosService } from './elementos.service';

describe('ElementosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElementosService = TestBed.get(ElementosService);
    expect(service).toBeTruthy();
  });
});
