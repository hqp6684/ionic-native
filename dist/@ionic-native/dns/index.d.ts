import { IonicNativePlugin } from '@ionic-native/core';
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
export declare class DNS extends IonicNativePlugin {
    /**
     * Resolve hostnames into an underlying network address.
     * @param hostname
     * @returns {Promise<string>} Returns a promise that resolves with the resolution.
     */
    resolve(hostname: string): Promise<string>;
}
