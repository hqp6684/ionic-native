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
import { Plugin, CordovaProperty, IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Uid
 * @description
 * Get unique identifiers: UUID, IMEI, IMSI, ICCID and MAC.
 *
 * @usage
 * ```typescript
 * import { Uid } from '@ionic-native/uid';
 * import { AndroidPermissions } from '@ionic-native/android-permissions';
 *
 * constructor(private uid: Uid, private androidPermissions: AndroidPermissions) { }
 *
 *
 * async getImei() {
 *  const { hasPermission } = await this.androidPermissions.checkPermission(
 *    this.androidPermissions.PERMISSION.READ_PHONE_STATE
 *  );
 *
 *  if (!hasPermission) {
 *    const result = await this.androidPermissions.requestPermission(
 *      this.androidPermissions.PERMISSION.READ_PHONE_STATE
 *    );
 *
 *    if (!result.hasPermission) {
 *      throw new Error('Permissions required');
 *    }
 *
 *    // ok, a user gave us permission, we can get him identifiers after restart app
 *    return;
 *  }
 *
 *   return this.uid.IMEI
 * }
 * ```
 */
var Uid = (function (_super) {
    __extends(Uid, _super);
    function Uid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Uid.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    Uid.ctorParameters = function () { return []; };
    __decorate([
        CordovaProperty,
        __metadata("design:type", String)
    ], Uid.prototype, "UUID", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", String)
    ], Uid.prototype, "IMEI", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", String)
    ], Uid.prototype, "IMSI", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", String)
    ], Uid.prototype, "ICCID", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", String)
    ], Uid.prototype, "MAC", void 0);
    Uid = __decorate([
        Plugin({
            pluginName: 'Uid',
            plugin: 'https://github.com/hygieiasoft/cordova-plugin-uid',
            pluginRef: 'cordova.plugins.uid',
            repo: 'https://github.com/hygieiasoft/cordova-plugin-uid',
            platforms: ['Android']
        })
    ], Uid);
    return Uid;
}(IonicNativePlugin));
export { Uid };
//# sourceMappingURL=index.js.map