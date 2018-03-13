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
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';
/**
 * @name DNS
 * @description A plugin for Apache Cordova that enables applications to manually resolve hostnames into an underlying network address. This is mostly useful for determining whether there is a problem with the device's DNS server configuration.
 *
 * @usage
 * ```typescript
 * import { DNS } from '@ionic-native/dns';
 *
 *
 * constructor(private dns: DNS) { }
 *
 * ...
 * this.dns.resolve(hostname)
 *   .then(
 *     address => console.log('Resolved ' + hostname + ' to ' + address),
 *     error => console.log('Failed to resolve ' + hostname + ': ' + error)
 *   );
 *
 * ```
 */
var DNS = (function (_super) {
    __extends(DNS, _super);
    function DNS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Resolve hostnames into an underlying network address.
     * @param hostname
     * @returns {Promise<string>} Returns a promise that resolves with the resolution.
     */
    DNS.prototype.resolve = function (hostname) { return; };
    DNS.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DNS.ctorParameters = function () { return []; };
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], DNS.prototype, "resolve", null);
    DNS = __decorate([
        Plugin({
            pluginName: 'DNS',
            plugin: 'cordova-plugin-dns',
            pluginRef: 'cordova.plugins.dns',
            repo: 'https://bitbucket.org/zegeba/cordova-plugin-dns',
            platforms: ['Android']
        })
    ], DNS);
    return DNS;
}(IonicNativePlugin));
export { DNS };
//# sourceMappingURL=index.js.map