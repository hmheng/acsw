import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlobUtilties } from '../utilities/BlobUtilities';
import { TranslateService } from '../services/TranslateService';
import { TranslateResponse } from '../models/TranslateModel';
import { OcrService } from '../services/OcrService';
import { OcrResponse } from '../models/OcrModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  @ViewChild("video")
  public video: ElementRef;
  @ViewChild("canvas")
  public canvas: ElementRef;
  
  public language: string = "zh";
  public ocrResult: string;
  public translatedText: string;

  public captures: Array<any>;

  constructor(private translateService: TranslateService, private ocrService: OcrService) {
    this.captures = [];
  }


  public ngAfterViewInit() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        this.video.nativeElement.src = window.URL.createObjectURL(stream);
        this.video.nativeElement.play();
      });
    }
  }


  public capture() {
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
    var url = this.canvas.nativeElement.toDataURL("image/jpg");
    this.captures.push(url);
    var blob = BlobUtilties.makeblob(url);
    var message = "";
    this.ocrService.CallOcrAPI(blob, "").subscribe((ocrResponse: OcrResponse)=> {
      //this.ocrResult = JSON.stringify(result);
      if (ocrResponse && ocrResponse.regions) {
        for (let region of ocrResponse.regions) {
          for (let line of region.lines) {
            for (let word of line.words) {
              message += word.text + " ";
            }
          }
        }
        this.ocrResult = message;
        this.translate(message);
      }
    });
  }

  translate(text:string) {
    this.translateService.CallTranslateAPI(text, this.language).subscribe(result => {
      this.translatedText = result[0].translations[0].text;
    }, error => console.error(error)
    );
  }

}
