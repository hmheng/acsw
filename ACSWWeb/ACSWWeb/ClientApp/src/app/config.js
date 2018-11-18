"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.COGNITIVE_HOST = 'https://api.cognitive.microsoft.com/';
    Config.OCR_API_ENDPOINT = 'https://southeastasia.api.cognitive.microsoft.com/vision/v2.0/ocr'; // https://[location].api.cognitive.microsoft.com/vision/v1.0/ocr[?language][&detectOrientation ] 
    Config.OCR_API_KEY = '';
    Config.TRANSLATE_API_ENDPOINT = 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0';
    Config.TRANSLATE_API_KEY = '';
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=config.js.map