export class TranslateRequest {
  Text : string;
}

export class TranslateResponse {
  detectedLanguage: DetectedLanguage;
  translations: Translation[];
}

class DetectedLanguage {
  language: string;
  score: number;
}

class Translation {
  text: string;
  to: string;
}
