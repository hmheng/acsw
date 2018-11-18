import { Component, Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OcrResponse } from '../models/OcrModel';
import { Config } from '../config';
import { Observable } from 'rxjs/Observable';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/octet-stream',
    'Ocp-Apim-Subscription-Key': Config.OCR_API_KEY
  })
};

@Injectable()
export class OcrService {
  private response: OcrResponse;
  private _httpClient: HttpClient;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._httpClient = http;
  }

  public CallOcrAPI(blob: any, language?: string): any {
    return this._httpClient.post<OcrResponse>((Config.OCR_API_ENDPOINT), blob, httpOptions);
  }
}
