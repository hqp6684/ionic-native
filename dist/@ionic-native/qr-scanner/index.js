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
import { Plugin, IonicNativePlugin, Cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
/**
 * @name QR Scanner
 * @description
 *
 * @usage
 * ```typescript
 * import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
 *
 *
 * constructor(private qrScanner: QRScanner) { }
 *
 * ...
 *
 * // Optionally request the permission early
 * this.qrScanner.prepare()
 *   .then((status: QRScannerStatus) => {
 *      if (status.authorized) {
 *        // camera permission was granted
 *
 *
 *        // start scanning
 *        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
 *          console.log('Scanned something', text);
 *
 *          this.qrScanner.hide(); // hide camera preview
 *          scanSub.unsubscribe(); // stop scanning
 *        });
 *
 *        // show camera preview
 *        this.qrScanner.show();
 *
 *        // wait for user to scan something, then the observable callback will be called
 *
 *      } else if (status.denied) {
 *        // camera permission was permanently denied
 *        // you must use QRScanner.openSettings() method to guide the user to the settings page
 *        // then they can grant the permission from there
 *      } else {
 *        // permission was denied, but not permanently. You can ask for permission again at a later time.
 *      }
 *   })
 *   .catch((e: any) => console.log('Error is', e));
 *
 *
 * ```
 * @interfaces
 * QRScannerStatus
 */
var QRScanner = (function (_super) {
    __extends(QRScanner, _super);
    function QRScanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Request permission to use QR scanner.
     * @return {Promise<QRScannerStatus>}
     */
    QRScanner.prototype.prepare = function () { return; };
    /**
     * Call this method to enable scanning. You must then call the `show` method to make the camera preview visible.
     * @return {Observable<string>} returns an Observable that emits the scanned text. Unsubscribe from the observable to stop scanning.
     */
    QRScanner.prototype.scan = function () { return; };
    /**
     * Configures the native webview to have a transparent background, then sets the background of the <body> and <html> DOM elements to transparent, allowing the webview to re-render with the transparent background.
     * @returns {Promise<QRScannerStatus>}
     */
    QRScanner.prototype.show = function () { return; };
    /**
     * Configures the native webview to be opaque with a white background, covering the video preview.
     * @returns {Promise<QRScannerStatus>}
     */
    QRScanner.prototype.hide = function () { return; };
    /**
     * Enable the device's light (for scanning in low-light environments).
     * @returns {Promise<QRScannerStatus>}
     */
    QRScanner.prototype.enableLight = function () { return; };
    /**
     * Destroy the scanner instance.
     * @returns {Promise<QRScannerStatus>}
     */
    QRScanner.prototype.destroy = function () { return; };
    /**
     * Disable the device's light.
     * @return {Promise<QRScannerStatus>}
     */
    QRScanner.prototype.disableLight = function () { return; };
    /**
     * Use front camera
     * @return {Promise<QRScannerStatus>}
     */
    QRScanner.prototype.useFrontCamera = function () { return; };
    /**
     * Use back camera
     * @return {Promise<QRScannerStatus>}
     */
    QRScanner.prototype.useBackCamera = function () { return; };
    /**
     * Set camera to be used.
     * @param camera {number} Provide `0` for back camera, and `1` for front camera.
     * @return {Promise<QRScannerStatus>}
     */
    QRScanner.prototype.useCamera = function (camera) { return; };
    /**
     * Pauses the video preview on the current frame and pauses scanning.
     * @return {Promise<QRScannerStatus>}
     */
    QRScanner.prototype.pausePreview = function () { return; };
    /**
     * Resumse the video preview and resumes scanning.
     * @return {Promise<QRScannerStatus>}
     */
    QRScanner.prototype.resumePreview = function () { return; };
    /**
     * Returns permission status
     * @return {Promise<QRScannerStatus>}
     */
    QRScanner.prototype.getStatus = function () { return; };
    /**
     * Opens settings to edit app permissions.
     */
    QRScanner.prototype.openSettings = function () { };
    QRScanner.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    QRScanner.ctorParameters = function () { return []; };
    __decorate([
        Cordova({
            callbackStyle: 'node'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], QRScanner.prototype, "prepare", null);
    __decorate([
        Cordova({
            callbackStyle: 'node',
            observable: true,
            clearFunction: 'cancelScan'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], QRScanner.prototype, "scan", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], QRScanner.prototype, "show", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], QRScanner.prototype, "hide", null);
    __decorate([
        Cordova({
            callbackStyle: 'node'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], QRScanner.prototype, "enableLight", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], QRScanner.prototype, "destroy", null);
    __decorate([
        Cordova({
            callbackStyle: 'node'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], QRScanner.prototype, "disableLight", null);
    __decorate([
        Cordova({
            callbackStyle: 'node'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], QRScanner.prototype, "useFrontCamera", null);
    __decorate([
        Cordova({
            callbackStyle: 'node'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], QRScanner.prototype, "useBackCamera", null);
    __decorate([
        Cordova({
            callbackStyle: 'node'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], QRScanner.prototype, "useCamera", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], QRScanner.prototype, "pausePreview", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], QRScanner.prototype, "resumePreview", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], QRScanner.prototype, "getStatus", null);
    __decorate([
        Cordova({
            sync: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], QRScanner.prototype, "openSettings", null);
    QRScanner = __decorate([
        Plugin({
            pluginName: 'QRScanner',
            plugin: 'cordova-plugin-qrscanner',
            pluginRef: 'QRScanner',
            repo: 'https://github.com/bitpay/cordova-plugin-qrscanner',
            platforms: ['Android', 'Browser', 'iOS', 'Windows']
        })
    ], QRScanner);
    return QRScanner;
}(IonicNativePlugin));
export { QRScanner };
//# sourceMappingURL=index.js.map