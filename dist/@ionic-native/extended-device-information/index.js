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
import { CordovaProperty, Plugin, IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Extended Device Information
 * @description
 * Retrieves additional device information that is not provided by other plugins
 *
 * @usage
 * ```typescript
 * import { ExtendedDeviceInformation } from '@ionic-native/extended-device-information';
 *
 *
 * constructor(private extendedDeviceInformation: ExtendedDeviceInformation) { }
 *
 * ...
 *
 * console.log('The Memory is: ' + this.extendedDeviceInformation.memory);
 * ```
 */
var ExtendedDeviceInformation = (function (_super) {
    __extends(ExtendedDeviceInformation, _super);
    function ExtendedDeviceInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtendedDeviceInformation.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ExtendedDeviceInformation.ctorParameters = function () { return []; };
    __decorate([
        CordovaProperty,
        __metadata("design:type", Number)
    ], ExtendedDeviceInformation.prototype, "memory", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", String)
    ], ExtendedDeviceInformation.prototype, "cpumhz", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", String)
    ], ExtendedDeviceInformation.prototype, "totalstorage", void 0);
    ExtendedDeviceInformation = __decorate([
        Plugin({
            pluginName: 'ExtendedDeviceInformation',
            plugin: 'cordova-plugin-extended-device-information',
            pluginRef: 'extended-device-information',
            repo: 'https://github.com/danielehrhardt/cordova-plugin-extended-device-information',
            platforms: ['Android']
        })
    ], ExtendedDeviceInformation);
    return ExtendedDeviceInformation;
}(IonicNativePlugin));
export { ExtendedDeviceInformation };
//# sourceMappingURL=index.js.map