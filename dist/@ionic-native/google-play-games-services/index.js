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
 * @name Google Play Games Services
 * @description
 * A Cordova plugin that let's you interact with Google Play Games Services.
 *
 * @usage
 * ```typescript
 * import { GooglePlayGamesServices } from '@ionic-native/google-play-games-services';
 *
 *
 * constructor(private googlePlayGamesServices: GooglePlayGamesServices) { }
 *
 * ...
 *
 * // Authenticate with Play Games Services
 * this.googlePlayGamesServices.auth()
 *     .then(() => console.log('Logged in to Play Games Services'))
 *     .catch(e) => console.log('Error logging in Play Games Services', e);
 *
 * // Sign out of Play Games Services.
 * this.googlePlayGamesServices.signOut()
 *     .then(() => console.log('Logged out of Play Games Services'))
 *     .catch(e => console.log('Error logging out of Play Games Services', e);
 *
 * // Check auth status.
 * this.googlePlayGamesServices.isSignedIn()
 *     .then((signedIn: SignedInResponse) => {
 *         if (signedIn.isSignedIn) {
 *             hideLoginButton();
 *         }
 *     });
 *
 * // Fetch currently authenticated user's data.
 * this.googlePlayGamesServices.showPlayer().then((data: Player) => {
 *    console.log('Player data', data);
 * });
 *
 * // Submit a score.
 * this.googlePlayGamesServices.submitScore({
 *     score: 100,
 *     leaderboardId: 'SomeLeaderboardId'
 * });
 *
 * // Show the native leaderboards window.
 * this.googlePlayGamesServices.showAllLeaderboards()
 *     .then(() => console.log('The leaderboard window is visible.'));
 *
 * // Show a signle native leaderboard window.
 * this.googlePlayGamesServices.showLeaderboard({
 *     leaderboardId: 'SomeLeaderBoardId'
 * }).then(() => console.log('The leaderboard window is visible.'));
 *
 * // Unlock an achievement.
 * this.googlePlayGamesServices.unlockAchievement({
 *     achievementId: 'SomeAchievementId'
 * }).then(() => console.log('Achievement unlocked'));
 *
 * // Incremement an achievement.
 * this.googlePlayGamesServices.incrementAchievement({
 *     step: 1,
 *     achievementId: 'SomeAchievementId'
 * }).then(() => console.log('Achievement incremented'));
 *
 * // Show the native achievements window.
 * this.googlePlayGamesServices.showAchivements()
 *    .then(() => console.log('The achievements window is visible.'));
 *
 * ```
 */
var GooglePlayGamesServices = (function (_super) {
    __extends(GooglePlayGamesServices, _super);
    function GooglePlayGamesServices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Initialise native Play Games Service login procedure.
     *
     * @return {Promise<any>} Returns a promise that resolves when the player
     * is authenticated with Play Games Services.
     */
    GooglePlayGamesServices.prototype.auth = function () { return; };
    /**
     * Sign out of Google Play Games Services.
     *
     * @return {Promise<any>} Returns a promise that resolve when the player
     * successfully signs out.
     */
    GooglePlayGamesServices.prototype.signOut = function () { return; };
    /**
     * Check if the user is signed in.
     *
     * @return {Promise<SignedInResponse>} Returns a promise that resolves with
     * the signed in response.
     */
    GooglePlayGamesServices.prototype.isSignedIn = function () { return; };
    /**
     * Show the currently authenticated player.
     *
     * @return {Promise<Player>} Returns a promise that resolves when Play
     * Games Services returns the authenticated player.
     */
    GooglePlayGamesServices.prototype.showPlayer = function () { return; };
    /**
     * Submit a score to a leaderboard. You should ensure that you have a
     * successful return from auth() before submitting a score.
     *
     * @param data {ScoreData} The score data you want to submit.
     * @return {Promise<any>} Returns a promise that resolves when the
     * score is submitted.
     */
    GooglePlayGamesServices.prototype.submitScore = function (data) { return; };
    /**
     * Launches the native Play Games leaderboard view controller to show all the
     * leaderboards.
     *
     * @return {Promise<any>} Returns a promise that resolves when the native
     * leaderboards window opens.
     */
    GooglePlayGamesServices.prototype.showAllLeaderboards = function () { return; };
    /**
     * Launches the native Play Games leaderboard view controll to show the
     * specified leaderboard.
     *
     * @param data {LeaderboardData} The leaderboard you want to show.
     * @return {Promise<any>} Returns a promise that resolves when the native
     * leaderboard window opens.
     */
    GooglePlayGamesServices.prototype.showLeaderboard = function (data) { return; };
    /**
     * Unlock an achievement.
     *
     * @param data {AchievementData}
     * @return {Promise<any>} Returns a promise that resolves when the
     * achievement is unlocked.
     */
    GooglePlayGamesServices.prototype.unlockAchievement = function (data) { return; };
    /**
     * Increment an achievement.
     *
     * @param data {IncrementableAchievementData}
     * @return {Promise<any>} Returns a promise that resolves when the
     * achievement is incremented.
     */
    GooglePlayGamesServices.prototype.incrementAchievement = function (data) { return; };
    /**
     * Lauches the native Play Games achievements view controller to show
     * achievements.
     *
     * @return {Promise<any>} Returns a promise that resolves when the
     * achievement window opens.
     */
    GooglePlayGamesServices.prototype.showAchievements = function () { return; };
    GooglePlayGamesServices.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    GooglePlayGamesServices.ctorParameters = function () { return []; };
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GooglePlayGamesServices.prototype, "auth", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GooglePlayGamesServices.prototype, "signOut", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GooglePlayGamesServices.prototype, "isSignedIn", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GooglePlayGamesServices.prototype, "showPlayer", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GooglePlayGamesServices.prototype, "submitScore", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GooglePlayGamesServices.prototype, "showAllLeaderboards", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GooglePlayGamesServices.prototype, "showLeaderboard", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GooglePlayGamesServices.prototype, "unlockAchievement", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GooglePlayGamesServices.prototype, "incrementAchievement", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GooglePlayGamesServices.prototype, "showAchievements", null);
    GooglePlayGamesServices = __decorate([
        Plugin({
            pluginName: 'GooglePlayGamesServices',
            plugin: 'cordova-plugin-play-games-service',
            pluginRef: 'plugins.playGamesServices',
            repo: 'https://github.com/artberri/cordova-plugin-play-games-services',
            platforms: ['Android'],
            install: 'ionic cordova plugin add cordova-plugin-play-games-service --variable APP_ID="YOUR_APP_ID',
        })
    ], GooglePlayGamesServices);
    return GooglePlayGamesServices;
}(IonicNativePlugin));
export { GooglePlayGamesServices };
//# sourceMappingURL=index.js.map