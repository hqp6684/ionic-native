var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
/**
 * @paid
 * @beta
 * @name Regula Document Reader
 * @description
 * Plugin for reading and validation of identification documents.
 *
 * @usage
 * ```typescript
 * import { RegulaDocumentReader } from '@ionic-native/regula-document-reader';
 *
 * let license; // read regula.license file
 * RegulaDocumentReader.initReader(license); // initialize reader
 * RegulaDocumentReader.scanDocument().then((result) => {
 * 		// read result
 * })
 * ```
 */
var RegulaDocumentReader = (function (_super) {
    __extends(RegulaDocumentReader, _super);
    function RegulaDocumentReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Initialize the scanner
     * @param license {any} License data
     */
    RegulaDocumentReader.prototype.initReader = function (license) { };
    /**
     * Run the scanner
     * @return {Promise<string[]>} Returns a promise that resolves when results was got, and fails when not
     */
    RegulaDocumentReader.prototype.scanDocument = function () { return; };
    RegulaDocumentReader.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    RegulaDocumentReader.ctorParameters = function () { return []; };
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], RegulaDocumentReader.prototype, "initReader", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], RegulaDocumentReader.prototype, "scanDocument", null);
    RegulaDocumentReader = __decorate([
        Plugin({
            pluginName: 'Regula Document Reader',
            plugin: 'cordova-plugin-documentreader',
            pluginRef: 'DocumentReader',
            repo: 'https://github.com/regulaforensics/cordova-plugin-documentreader.git',
            platforms: ['iOS', 'Android'],
            install: 'ionic plugin add cordova-plugin-documentreader --variable CAMERA_USAGE_DESCRIPTION="To take photo"',
        })
    ], RegulaDocumentReader);
    return RegulaDocumentReader;
}(IonicNativePlugin));
export { RegulaDocumentReader };
//# sourceMappingURL=index.js.map