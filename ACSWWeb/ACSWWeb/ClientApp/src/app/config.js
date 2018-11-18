"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.COGNITIVE_HOST = 'https://api.cognitive.microsoft.com/';
    Config.OCR_API_ENDPOINT = 'https://southeastasia.api.cognitive.microsoft.com/vision/v2.0/ocr'; // https://[location].api.cognitive.microsoft.com/vision/v1.0/ocr[?language][&detectOrientation ] 
    Config.OCR_API_KEY = '5a4655c320444062b8b7344419523830';
    Config.TRANSLATE_API_ENDPOINT = 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0';
    Config.TRANSLATE_API_KEY = 'd7c31cc77cb84cd293c9ecb4e27025bf';
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=config.js.map