import { Component, Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TranslateRequest, TranslateResponse } from '../models/TranslateModel';
import { Config } from '../config';
import { Observable } from 'rxjs/Observable';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Ocp-Apim-Subscription-Key': Config.TRANSLATE_API_KEY })
};

@Injectable()
export class TranslateService {
  private response: TranslateResponse;
  private _httpClient: HttpClient;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._httpClient = http;
  }

  public CallTranslateAPI(text: string, language: string): any{
    var translateRequests: TranslateRequest[] = [];
    var request = new TranslateRequest;
    request.Text = text;
    translateRequests.push(request);
    return this._httpClient.post<TranslateResponse>((Config.TRANSLATE_API_ENDPOINT + '&to=' + language), translateRequests, httpOptions);
  }
}
