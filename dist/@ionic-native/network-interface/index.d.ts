import { IonicNativePlugin } from '@ionic-native/core';
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
export declare class NetworkInterface extends IonicNativePlugin {
    getIPAddress(): Promise<string>;
    /**
     * Gets the WiFi IP address
     * @param success {Function} Callback used when successful
     * @param error {Function} Callback used when failure
     */
    getWiFiIPAddress(): Promise<string>;
    /**
     * Gets the wireless carrier IP address
     * @param success {Function} Callback used when successful
     * @param error {Function} Callback used when failure
     */
    getCarrierIPAddress(): Promise<string>;
    /**
     * Get the network SSID
     * @param success {Function} Callback used when successful
     * @param error {Function} Callback used when failure
     */
    getSSID(): Promise<string>;
}
