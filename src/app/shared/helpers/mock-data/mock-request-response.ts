import { HttpHeaders, HttpClient, HttpResponse, HttpRequest } from "@angular/common/http";
import { TranslateData } from './translate-data';

let httpClient: HttpClient;

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

export const GetAllTranslationsRequest = new HttpRequest('GET', 'http://thisisonlyatest.io/api/translation/en-es', httpOptions);
export const GetAllTranslationsResponse = new HttpResponse({ status: 200, body: TranslateData });

export const PostLoginRequest = new HttpRequest('POST', 'http://thisisonlyatest.io/api/user/authenticate', httpOptions);
export const PostLoginResponse = new HttpResponse({ status: 200, body: TranslateData });

export const GetAllUsersRequest = new HttpRequest('GET', 'http://thisisonlyatest.io/api/users', httpOptions);
export const GetAllUsersResponse = new HttpResponse({ status: 200, body: TranslateData });