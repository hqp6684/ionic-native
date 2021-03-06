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
import { Plugin, Cordova, CordovaCheck, CordovaInstance, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
/**
 * @hidden
 */
var ProDeploy = (function () {
    function ProDeploy(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    /**
     * Re-initialize Deploy plugin with a new App ID and host.  Not used in most cases.
     * @param config A valid Deploy config object
     */
    ProDeploy.prototype.init = function (config) { return; };
    /**
     * Check a channel for an available update
     * @return {Promise<string>} Resolves with 'true' or 'false', or rejects with an error.
     */
    ProDeploy.prototype.check = function () { return; };
    /**
     * Download an available version
     * @return {Observable<any>} Updates with percent completion, or errors with a message.
     */
    ProDeploy.prototype.download = function () { return; };
    /**
     * Unzip the latest downloaded version
     * @return {Observable<any>} Updates with percent completion, or errors with a message.
     */
    ProDeploy.prototype.extract = function () { return; };
    /**
     * Reload app with the deployed version
     */
    ProDeploy.prototype.redirect = function () { return; };
    /**
     * Get info about the version running on the device
     * @return {Promise<DeployInfo>} Information about the current version running on the app.
     */
    ProDeploy.prototype.info = function () { return; };
    /**
     * List versions stored on the device
     */
    ProDeploy.prototype.getVersions = function () { return; };
    /**
     * Delete a version stored on the device by UUID
     * @param version A version UUID
     */
    ProDeploy.prototype.deleteVersion = function (version) { return; };
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], ProDeploy.prototype, "init", null);
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ProDeploy.prototype, "check", null);
    __decorate([
        CordovaInstance({
            observable: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], ProDeploy.prototype, "download", null);
    __decorate([
        CordovaInstance({
            observable: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], ProDeploy.prototype, "extract", null);
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ProDeploy.prototype, "redirect", null);
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ProDeploy.prototype, "info", null);
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ProDeploy.prototype, "getVersions", null);
    __decorate([
        CordovaInstance(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], ProDeploy.prototype, "deleteVersion", null);
    return ProDeploy;
}());
export { ProDeploy };
/**
 * @name Pro
 * @description
 * This plugin enables Ionic Pro services like live updates and error monitoring
 *
 * @usage
 * ```typescript
 * import { Pro, AppInfo, DeployInfo } from '@ionic-native/pro';
 *
 *
 * constructor(private pro: Pro) { }
 *
 * // Get app info
 * this.pro.getAppInfo().then((res: AppInfo) => {
 *   console.log(res)
 * })
 *
 * // Get live update info
 * this.pro.deploy.info().then((res: DeployInfo) => {
 *   console.log(res)
 * })
 * ```
 */
var Pro = (function (_super) {
    __extends(Pro, _super);
    function Pro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pro_1 = Pro;
    /**
     * Ionic Pro Deploy .js API.
     */
    Pro.prototype.deploy = function () {
        if (this._deploy) {
            return this._deploy;
        }
        else {
            this._deploy = new ProDeploy(Pro_1.getPlugin().deploy);
            return this._deploy;
        }
    };
    /**
     * Not yet implemented
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    Pro.prototype.enableCrashLogging = function () { return; };
    /**
     * Not yet implemented
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    Pro.prototype.checkForPendingCrash = function () { return; };
    /**
     * Not yet implemented
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    Pro.prototype.loadPendingCrash = function () { return; };
    /**
     * Not yet implemented
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    Pro.prototype.forceCrash = function () { return; };
    /**
     * Get information about the currently running app
     * @return {Promise<any>} Returns a promise that resolves with current app info
     */
    Pro.prototype.getAppInfo = function () { return; };
    Pro.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    Pro.ctorParameters = function () { return []; };
    __decorate([
        CordovaCheck({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", ProDeploy)
    ], Pro.prototype, "deploy", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Pro.prototype, "enableCrashLogging", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Pro.prototype, "checkForPendingCrash", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Pro.prototype, "loadPendingCrash", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Pro.prototype, "forceCrash", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Pro.prototype, "getAppInfo", null);
    Pro = Pro_1 = __decorate([
        Plugin({
            pluginName: 'Pro',
            plugin: 'cordova-plugin-ionic',
            pluginRef: 'IonicCordova',
            repo: 'https://github.com/ionic-team/cordova-plugin-ionic',
            platforms: ['Android', 'iOS'],
            install: 'ionic cordova plugin add cordova-plugin-ionic --save --variable APP_ID="XXXXXXXX" --variable CHANNEL_NAME="Channel"'
        })
    ], Pro);
    return Pro;
    var Pro_1;
}(IonicNativePlugin));
export { Pro };
//# sourceMappingURL=index.js.map