import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
/**
 * Information about the currently running app
 */
export interface AppInfo {
    platform: string;
    platformVersion: string;
    version: string;
    bundleName: string;
    bundleVersion: string;
}
/**
 * Information about the current live update
 */
export interface DeployInfo {
    deploy_uuid: string;
    channel: string;
    binary_version: string;
}
/**
 * Object for manually configuring deploy
 */
export interface DeployConfig {
    appId?: string;
    host?: string;
    channel?: string;
}
/**
 * @hidden
 */
export declare class ProDeploy {
    private _objectInstance;
    constructor(_objectInstance: any);
    /**
     * Re-initialize Deploy plugin with a new App ID and host.  Not used in most cases.
     * @param config A valid Deploy config object
     */
    init(config: DeployConfig): Promise<any>;
    /**
     * Check a channel for an available update
     * @return {Promise<string>} Resolves with 'true' or 'false', or rejects with an error.
     */
    check(): Promise<string>;
    /**
     * Download an available version
     * @return {Observable<any>} Updates with percent completion, or errors with a message.
     */
    download(): Observable<any>;
    /**
     * Unzip the latest downloaded version
     * @return {Observable<any>} Updates with percent completion, or errors with a message.
     */
    extract(): Observable<any>;
    /**
     * Reload app with the deployed version
     */
    redirect(): Promise<any>;
    /**
     * Get info about the version running on the device
     * @return {Promise<DeployInfo>} Information about the current version running on the app.
     */
    info(): Promise<DeployInfo>;
    /**
     * List versions stored on the device
     */
    getVersions(): Promise<any>;
    /**
     * Delete a version stored on the device by UUID
     * @param version A version UUID
     */
    deleteVersion(version: string): Promise<any>;
}
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
export declare class Pro extends IonicNativePlugin {
    _deploy: ProDeploy;
    /**
     * Ionic Pro Deploy .js API.
     */
    deploy(): ProDeploy;
    /**
     * Not yet implemented
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    enableCrashLogging(): Promise<any>;
    /**
     * Not yet implemented
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    checkForPendingCrash(): Promise<any>;
    /**
     * Not yet implemented
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    loadPendingCrash(): Promise<any>;
    /**
     * Not yet implemented
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    forceCrash(): Promise<any>;
    /**
     * Get information about the currently running app
     * @return {Promise<any>} Returns a promise that resolves with current app info
     */
    getAppInfo(): Promise<AppInfo>;
}
