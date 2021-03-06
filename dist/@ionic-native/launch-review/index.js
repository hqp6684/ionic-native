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
 * @name Launch Review
 * @description
 *
 * Assists in leaving user reviews/ratings in the App Stores.
 * - Launches the platform's App Store page for the current app in order for the user to leave a review.
 * - On iOS (10.3 and above) invokes the native in-app rating dialog which allows a user to rate your app without needing to open the App Store.
 *
 * @usage
 * ```typescript
 * import { LaunchReview } from '@ionic-native/launch-review';
 *
 * constructor(private launchReview: LaunchReview) { }
 *
 * ...
 *
 * this.launchReview.launch()
 *   .then(() => console.log('Successfully launched store app');
 *
 * if(this.launchReview.isRatingSupported()){
 *   this.launchReview.rating()
 *     .then(() => console.log('Successfully launched rating dialog');
 * }
 * ```
 */
var LaunchReview = (function (_super) {
    __extends(LaunchReview, _super);
    function LaunchReview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Launches App Store on current platform in order to leave a review for given app.
     * @param appId {string} - (optional) the platform-specific app ID to use to open the page in the store app.
     * If not specified, the plugin will use the app ID for the app in which the plugin is contained.
     * On Android this is the full package name of the app. For example, for Google Maps: `com.google.android.apps.maps`
     * On iOS this is the Apple ID of the app. For example, for Google Maps: `585027354`
     * @returns {Promise<void>}
     */
    LaunchReview.prototype.launch = function (appId) { return; };
    /**
     * Invokes the native in-app rating dialog which allows a user to rate your app without needing to open the App Store.
     * Requires iOS 10.3 and above: Calling this on any platform/version other than iOS 10.3+ will result in the error callback.
     * Success callback will be called up to 3 times:
     * - First: after `LaunchReview.rating()` is called and the request to show the dialog is successful. Will be passed the value `requested`.
     * - Second: if and when the Rating dialog is actually displayed.  Will be passed the value `shown`.
     * - Third: if and when the Rating dialog is dismissed.  Will be passed the value `dismissed`.
     * @returns {Promise<string>}
     */
    LaunchReview.prototype.rating = function () { return; };
    /**
     * Indicates if the current platform/version supports in-app ratings dialog, i.e. calling LaunchReview.rating().
     * Will return true if current platform is iOS 10.3 or above.
     * @returns {boolean}
     */
    LaunchReview.prototype.isRatingSupported = function () { return; };
    LaunchReview.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LaunchReview.ctorParameters = function () { return []; };
    __decorate([
        Cordova({ platforms: ['Android', 'iOS'], callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], LaunchReview.prototype, "launch", null);
    __decorate([
        Cordova({ platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], LaunchReview.prototype, "rating", null);
    __decorate([
        Cordova({ platforms: ['Android', 'iOS'], sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], LaunchReview.prototype, "isRatingSupported", null);
    LaunchReview = __decorate([
        Plugin({
            pluginName: 'LaunchReview',
            plugin: 'cordova-launch-review',
            pluginRef: 'LaunchReview',
            repo: 'https://github.com/dpa99c/cordova-launch-review',
            platforms: ['Android', 'iOS']
        })
    ], LaunchReview);
    return LaunchReview;
}(IonicNativePlugin));
export { LaunchReview };
//# sourceMappingURL=index.js.map