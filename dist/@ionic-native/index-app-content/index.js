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
import { Plugin, Cordova, CordovaFunctionOverride, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
/**
 * @name Index App Content
 * @description
 * This plugin gives you a Javascript API to interact with Core Spotlight on iOS (=> iOS 9).
 * You can add, update and delete items to the spotlight search index.
 * Spotlight Search will include these items in the result list. You can deep-link the search results with your app.
 *
 * @usage
 * ```typescript
 * import { IndexAppContent } from '@ionic-native/index-app-content';
 *
 *
 * constructor(private indexAppContent: IndexAppContent) { }
 *
 * ...
 *
 * var items = [
 *      {
 *        domain: 'com.my.domain',
 *        identifier: '88asdf7dsf',
 *        title: 'Foo',
 *        description: 'Bar',
 *        url: 'http://location/of/my/image.jpg',
 *    },
 *    {
 *        domain: 'com.other.domain',
 *        identifier: '9asd67g6a',
 *        title: 'Baz',
 *        description: 'Woot',
 *        url: 'http://location/of/my/image2.jpg',
 *     }
 * ];
 *
 * this.indexAppContent.setItems(items)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
var IndexAppContent = (function (_super) {
    __extends(IndexAppContent, _super);
    function IndexAppContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * The option to index app content might not be available at all due to device limitations or user settings.
     * Therefore it's highly recommended to check upfront if indexing is possible.
     * @return {Promise<boolean>} Returns a promise that resolves with true if indexing is available, false if not
     */
    IndexAppContent.prototype.isIndexingAvailable = function () {
        return;
    };
    /**
     * Add or change items to spotlight index
     * @param {Array<IndexItem>} Array of items to index
     * @return {Promise<any>} Returns if index set was successfull
     */
    IndexAppContent.prototype.setItems = function (items) {
        return;
    };
    /**
     * If user taps on a search result in spotlight then the app will be launched.
     * You can register a Javascript handler to get informed when this happens.
     * @returns {Observable<any>} returns an observable that notifies you when he user presses on the home screen icon
     */
    IndexAppContent.prototype.onItemPressed = function () {
        return;
    };
    /**
     * Clear all items stored for a given array of domains
     * @param {Array<string>} Array of domains to clear
     * @return {Promise<any>} Resolve if successfull
     */
    IndexAppContent.prototype.clearItemsForDomains = function (domains) {
        return;
    };
    /**
     * Clear all items stored for a given array of identifiers
     * @param {Array<string>} Array of identifiers to clear
     * @return {Promise<any>} Resolve if successfull
     */
    IndexAppContent.prototype.clearItemsForIdentifiers = function (identifiers) {
        return;
    };
    /**
     * You might want to avoid to update spotlight index too frequently.
     * Without calling this function a subsequent call to manipulate the index is only possible after 1440 minutes (= 24 hours)!
     * @param {number} Numeric value => 0
     */
    IndexAppContent.prototype.setIndexingInterval = function (intervalMinutes) {
        return;
    };
    IndexAppContent.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    IndexAppContent.ctorParameters = function () { return []; };
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], IndexAppContent.prototype, "isIndexingAvailable", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", Promise)
    ], IndexAppContent.prototype, "setItems", null);
    __decorate([
        CordovaFunctionOverride(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], IndexAppContent.prototype, "onItemPressed", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", Promise)
    ], IndexAppContent.prototype, "clearItemsForDomains", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", Promise)
    ], IndexAppContent.prototype, "clearItemsForIdentifiers", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], IndexAppContent.prototype, "setIndexingInterval", null);
    IndexAppContent = __decorate([
        Plugin({
            pluginName: 'IndexAppContent',
            plugin: 'cordova-plugin-indexappcontent',
            pluginRef: 'window.plugins.indexAppContent',
            repo: 'https://github.com/johanblomgren/cordova-plugin-indexappcontent',
            platforms: ['iOS']
        })
    ], IndexAppContent);
    return IndexAppContent;
}(IonicNativePlugin));
export { IndexAppContent };
//# sourceMappingURL=index.js.map