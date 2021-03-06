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
 * @name Network Interface
 * @description
 * Network interface information plugin for Cordova/PhoneGap that supports Android, Blackberry 10, Browser, iOS, and Windows Phone 8.
 *
 * @usage
 * ```typescript
 * import { NetworkInterface } from '@ionic-native/network-interface';
 *
 *
 * constructor(private networkInterface: NetworkInterface) { }
 *
 * ...
 *
 * this.networkInterface.getWiFiIPAddress(function (ip) { alert(ip); });
 * this.networkInterface.getCarrierIPAddress(function (ip) { alert(ip); });
 *
 *
 * ```
 */
var NetworkInterface = (function (_super) {
    __extends(NetworkInterface, _super);
    function NetworkInterface() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NetworkInterface.prototype.getIPAddress = function () {
        return;
    };
    /**
     * Gets the WiFi IP address
     * @param success {Function} Callback used when successful
     * @param error {Function} Callback used when failure
     */
    NetworkInterface.prototype.getWiFiIPAddress = function () {
        return;
    };
    /**
     * Gets the wireless carrier IP address
     * @param success {Function} Callback used when successful
     * @param error {Function} Callback used when failure
     */
    NetworkInterface.prototype.getCarrierIPAddress = function () {
        return;
    };
    /**
     * Get the network SSID
     * @param success {Function} Callback used when successful
     * @param error {Function} Callback used when failure
     */
    NetworkInterface.prototype.getSSID = function () {
        return;
    };
    NetworkInterface.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NetworkInterface.ctorParameters = function () { return []; };
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], NetworkInterface.prototype, "getIPAddress", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], NetworkInterface.prototype, "getWiFiIPAddress", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], NetworkInterface.prototype, "getCarrierIPAddress", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], NetworkInterface.prototype, "getSSID", null);
    NetworkInterface = __decorate([
        Plugin({
            pluginName: 'NetworkInterface',
            plugin: 'cordova-plugin-networkinterface',
            pluginRef: 'networkinterface',
            repo: 'https://github.com/salbahra/cordova-plugin-networkinterface',
            platforms: ['Android', 'BlackBerry 10', 'Browser', 'iOS', 'Windows', 'Windows Phone'],
        })
    ], NetworkInterface);
    return NetworkInterface;
}(IonicNativePlugin));
export { NetworkInterface };
//# sourceMappingURL=index.js.map