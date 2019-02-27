import { GetAllTranslationsRequest, GetAllTranslationsResponse } from '../helpers';
import { ApiService } from './http/api.service';
import { Injectable} from '@angular/core';
import { RequestCacheService } from './http';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor(private api: ApiService, private cache: RequestCacheService) {
    this.cache.put(GetAllTranslationsRequest,GetAllTranslationsResponse);
   }

  getAll() {
    return this.api.get('/translation/en-es');
  }
}
