class Word {
  boundingBox: number[];
  text: string;
}

class Line {
  boundingBox: number[];
  text: string;
  words: Word[];
}

class Region {
  boundingBox: string;
  lines: Line[];
}

export class OcrResponse {
  language: string;
  textAngle: number;
  orientation: string;
  regions: Region[];
}
