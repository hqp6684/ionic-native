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
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';
/**
 * Bit flag values for setSystemUiVisibility()
 * @see	https://developer.android.com/reference/android/view/View.html#setSystemUiVisibility(int)
 */
export var AndroidSystemUiFlags;
(function (AndroidSystemUiFlags) {
    /** View has requested the system UI (status bar) to be visible (the default). SYSTEM_UI_FLAG_VISIBLE */
    AndroidSystemUiFlags[AndroidSystemUiFlags["Visible"] = 0] = "Visible";
    /** View has requested the system UI to enter an unobtrusive "low profile" mode. SYSTEM_UI_FLAG_LOW_PROFILE */
    AndroidSystemUiFlags[AndroidSystemUiFlags["LowProfile"] = 1] = "LowProfile";
    /** View has requested that the system navigation be temporarily hidden. SYSTEM_UI_FLAG_HIDE_NAVIGATION */
    AndroidSystemUiFlags[AndroidSystemUiFlags["HideNavigation"] = 2] = "HideNavigation";
    /** View has requested to go into the normal fullscreen mode so that its content can take over the screen while still allowing the user to interact with the application. SYSTEM_UI_FLAG_FULLSCREEN */
    AndroidSystemUiFlags[AndroidSystemUiFlags["Fullscreen"] = 4] = "Fullscreen";
    /** Requests the navigation bar to draw in a mode that is compatible with light navigation bar backgrounds. SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR */
    AndroidSystemUiFlags[AndroidSystemUiFlags["LightNavigationBar"] = 16] = "LightNavigationBar";
    /** When using other layout flags, we would like a stable view of the content insets given to fitSystemWindows(Rect). SYSTEM_UI_FLAG_LAYOUT_STABLE */
    AndroidSystemUiFlags[AndroidSystemUiFlags["LayoutStable"] = 256] = "LayoutStable";
    /** View would like its window to be laid out as if it has requested SYSTEM_UI_FLAG_HIDE_NAVIGATION, even if it currently hasn't. SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION */
    AndroidSystemUiFlags[AndroidSystemUiFlags["LayoutHideNavigation"] = 512] = "LayoutHideNavigation";
    /** View would like its window to be laid out as if it has requested SYSTEM_UI_FLAG_FULLSCREEN, even if it currently hasn't. SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN */
    AndroidSystemUiFlags[AndroidSystemUiFlags["LayoutFullscreen"] = 1024] = "LayoutFullscreen";
    /** View would like to remain interactive when hiding the navigation bar with SYSTEM_UI_FLAG_HIDE_NAVIGATION. SYSTEM_UI_FLAG_IMMERSIVE */
    AndroidSystemUiFlags[AndroidSystemUiFlags["Immersive"] = 2048] = "Immersive";
    /** View would like to remain interactive when hiding the status bar with SYSTEM_UI_FLAG_FULLSCREEN and/or hiding the navigation bar with SYSTEM_UI_FLAG_HIDE_NAVIGATION. SYSTEM_UI_FLAG_IMMERSIVE_STICKY */
    AndroidSystemUiFlags[AndroidSystemUiFlags["ImmersiveSticky"] = 4096] = "ImmersiveSticky";
    /** Requests the status bar to draw in a mode that is compatible with light status bar backgrounds. SYSTEM_UI_FLAG_LIGHT_STATUS_BAR */
    AndroidSystemUiFlags[AndroidSystemUiFlags["LightStatusBar"] = 8192] = "LightStatusBar";
})(AndroidSystemUiFlags || (AndroidSystemUiFlags = {}));
/**
 * @name Android Full Screen
 * @description
 * This plugin enables developers to offer users a true full screen experience in their Cordova and PhoneGap apps for Android.
 * Using Android 4.0+, you can use true full screen in "lean mode", the way you see in apps like YouTube, expanding the app right to the edges of the screen, hiding the status and navigation bars until the user next interacts. This is ideally suited to video or cut-scene content.
 * In Android 4.4+, however, you can now enter true full screen, fully interactive immersive mode. In this mode, your app will remain in true full screen until you choose otherwise; users can swipe down from the top of the screen to temporarily display the system UI.
 * @usage
 * ```typescript
 * import { AndroidFullScreen } from '@ionic-native/android-full-screen';
 *
 * constructor(private androidFullScreen: AndroidFullScreen) { }
 *
 * ...
 *
 * this.androidFullScreen.isImmersiveModeSupported()
 *   .then(() => this.androidFullScreen.immersiveMode())
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
var AndroidFullScreen = (function (_super) {
    __extends(AndroidFullScreen, _super);
    function AndroidFullScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Is this plugin supported?
     * @return {Promise<void>}
     */
    AndroidFullScreen.prototype.isSupported = function () { return; };
    /**
     * Is immersive mode supported?
     * @return {Promise<void>}
     */
    AndroidFullScreen.prototype.isImmersiveModeSupported = function () { return; };
    /**
     * The width of the screen in immersive mode.
     * @return {Promise<number>}
     */
    AndroidFullScreen.prototype.immersiveWidth = function () { return; };
    /**
     * The height of the screen in immersive mode.
     * @return {Promise<number>}
     */
    AndroidFullScreen.prototype.immersiveHeight = function () { return; };
    /**
     * Hide system UI until user interacts.
     * @return {Promise<void>}
     */
    AndroidFullScreen.prototype.leanMode = function () { return; };
    /**
     * Show system UI.
     * @return {Promise<void>}
     */
    AndroidFullScreen.prototype.showSystemUI = function () { return; };
    /**
     * Extend your app underneath the status bar (Android 4.4+ only).
     * @return {Promise<void>}
     */
    AndroidFullScreen.prototype.showUnderStatusBar = function () { return; };
    /**
     * Extend your app underneath the system UI (Android 4.4+ only).
     * @return {Promise<void>}
     */
    AndroidFullScreen.prototype.showUnderSystemUI = function () { return; };
    /**
     * Hide system UI and keep it hidden (Android 4.4+ only).
     * @return {Promise<void>}
     */
    AndroidFullScreen.prototype.immersiveMode = function () { return; };
    /**
     * Manually set the the system UI to a custom mode. This mirrors the Android method of the same name. (Android 4.4+ only).
     * @see https://developer.android.com/reference/android/view/View.html#setSystemUiVisibility(int)
     * @param {AndroidSystemUiFlags} visibility Bitwise-OR of flags in AndroidSystemUiFlags
     * @return {Promise<void>}
     */
    AndroidFullScreen.prototype.setSystemUiVisibility = function (visibility) { return; };
    AndroidFullScreen.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AndroidFullScreen.ctorParameters = function () { return []; };
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AndroidFullScreen.prototype, "isSupported", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AndroidFullScreen.prototype, "isImmersiveModeSupported", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AndroidFullScreen.prototype, "immersiveWidth", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AndroidFullScreen.prototype, "immersiveHeight", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AndroidFullScreen.prototype, "leanMode", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AndroidFullScreen.prototype, "showSystemUI", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AndroidFullScreen.prototype, "showUnderStatusBar", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AndroidFullScreen.prototype, "showUnderSystemUI", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AndroidFullScreen.prototype, "immersiveMode", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], AndroidFullScreen.prototype, "setSystemUiVisibility", null);
    AndroidFullScreen = __decorate([
        Plugin({
            pluginName: 'AndroidFullScreen',
            plugin: 'cordova-plugin-fullscreen',
            pluginRef: 'AndroidFullScreen',
            repo: 'https://github.com/mesmotronic/cordova-plugin-fullscreen',
            platforms: ['Android']
        })
    ], AndroidFullScreen);
    return AndroidFullScreen;
}(IonicNativePlugin));
export { AndroidFullScreen };
//# sourceMappingURL=index.js.map