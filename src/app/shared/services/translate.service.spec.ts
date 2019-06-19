import { TestBed } from '@angular/core/testing';

import { TranslateService } from './translate.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Translate } from '..';

describe('TranslateService', () => {
  let service: TranslateService;
  beforeEach(() => {TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule, RouterTestingModule ]
  });
  service = TestBed.get(TranslateService);
  }
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getAll should return all translation for english to spanish', () => {
    /*const translate: Translate[] = [
      { id: 1, key: 'hat', value: 'sombrero' },
      { id: 2, key: 'fire', value: 'fuego' },
      { id: 3, key: 'cake', value: 'pastel' },
      { id: 4, key: 'chef', value: 'cocinero' },
      { id: 5, key: 'hottub', value: 'bañera de hidromasaje' },
      { id: 6, key: 'hotel', value: 'hotel' }];
      
    expect(service.getAll()).toBe(translate);*/
  })
});
