export interface Word {
  boundingBox: number[];
  text: string;
}

export interface Line {
  boundingBox: number[];
  text: string;
  words: Word[];
}

//export interface RecognitionResult {
//  lines: Line[];
//}

//export interface OcrResponse {
//  status: string;
//  succeeded: boolean;
//  failed: boolean;
//  finished: boolean;
//  recognitionResult: RecognitionResult;
//}

export interface Region {
  boundingBox: string;
  lines: Line[];
}

export interface OcrResponse {
  language: string;
  textAngle: number;
  orientation: string;
  regions: Region[];
}
