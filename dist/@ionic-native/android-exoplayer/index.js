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
import { Observable } from 'rxjs/Observable';
/**
 * @name Android ExoPlayer
 * @description
 * Cordova media player plugin using Google's ExoPlayer framework.
 *
 * https://github.com/google/ExoPlayer
 *
 * @usage
 * ```typescript
 * import { AndroidExoPlayer } from '@ionic-native/android-exoplayer';
 *
 * constructor(private androidExoPlayer: AndroidExoPlayer) { }
 *
 * ...
 *
 * this.androidExoPlayer.show({url: 'http://www.youtube.com/api/manifest/dash/id/bf5bb2419360daf1/source/youtube'});
 *
 * ```
 *
 * @interfaces
 * AndroidExoPlayerParams
 * AndroidExoplayerState
 * AndroidExoPlayerControllerConfig
 */
var AndroidExoplayer = (function (_super) {
    __extends(AndroidExoplayer, _super);
    function AndroidExoplayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Show the player.
     * @param parameters {AndroidExoPlayerParams} Parameters
     * @return {Observable<AndroidExoplayerState>}
     */
    AndroidExoplayer.prototype.show = function (parameters) { return; };
    /**
     * Switch stream without disposing of the player.
     * @param url {string} The url of the new stream.
     * @param controller {AndroidExoPlayerControllerConfig} Configuration of the controller.
     * @return {Promise<void>}
     */
    AndroidExoplayer.prototype.setStream = function (url, controller) { return; };
    /**
     * Will pause if playing and play if paused
     * @return {Promise<void>}
     */
    AndroidExoplayer.prototype.playPause = function () { return; };
    /**
     * Stop playing.
     * @return {Promise<void>}
     */
    AndroidExoplayer.prototype.stop = function () { return; };
    /**
     * Jump to a particular position.
     * @param milliseconds {number} Position in stream in milliseconds
     * @return {Promise<void>}
     */
    AndroidExoplayer.prototype.seekTo = function (milliseconds) { return; };
    /**
     * Jump to a particular time relative to the current position.
     * @param milliseconds {number} Time in milliseconds
     * @return {Promise<void>}
     */
    AndroidExoplayer.prototype.seekBy = function (milliseconds) { return; };
    /**
     * Get the current player state.
     * @return {Promise<AndroidExoplayerState>}
     */
    AndroidExoplayer.prototype.getState = function () { return; };
    /**
     * Show the controller.
     * @return {Promise<void>}
     */
    AndroidExoplayer.prototype.showController = function () { return; };
    /**
     * Hide the controller.
     * @return {Promise<void>}
     */
    AndroidExoplayer.prototype.hideController = function () { return; };
    /**
     * Update the controller configuration.
     * @param controller {AndroidExoPlayerControllerConfig} Configuration of the controller.
     * @return {Promise<void>}
     */
    AndroidExoplayer.prototype.setController = function (controller) { return; };
    /**
     * Close and dispose of player, call before destroy.
     * @return {Promise<void>}
     */
    AndroidExoplayer.prototype.close = function () { return; };
    AndroidExoplayer.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AndroidExoplayer.ctorParameters = function () { return []; };
    __decorate([
        Cordova({
            observable: true,
            clearFunction: 'close',
            clearWithArgs: false,
            successIndex: 1,
            errorIndex: 2
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Observable)
    ], AndroidExoplayer.prototype, "show", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], AndroidExoplayer.prototype, "setStream", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AndroidExoplayer.prototype, "playPause", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AndroidExoplayer.prototype, "stop", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], AndroidExoplayer.prototype, "seekTo", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], AndroidExoplayer.prototype, "seekBy", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AndroidExoplayer.prototype, "getState", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AndroidExoplayer.prototype, "showController", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AndroidExoplayer.prototype, "hideController", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AndroidExoplayer.prototype, "setController", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AndroidExoplayer.prototype, "close", null);
    AndroidExoplayer = __decorate([
        Plugin({
            pluginName: 'AndroidExoPlayer',
            plugin: 'cordova-plugin-exoplayer',
            pluginRef: 'ExoPlayer',
            repo: 'https://github.com/frontyard/cordova-plugin-exoplayer',
            platforms: ['Android']
        })
    ], AndroidExoplayer);
    return AndroidExoplayer;
}(IonicNativePlugin));
export { AndroidExoplayer };
//# sourceMappingURL=index.js.map