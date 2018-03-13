import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Extended Device Information
 * @description
 * Retrieves additional device information that is not provided by other plugins
 *
 * @usage
 * ```typescript
 * import { ExtendedDeviceInformation } from '@ionic-native/extended-device-information';
 *
 *
 * constructor(private extendedDeviceInformation: ExtendedDeviceInformation) { }
 *
 * ...
 *
 * console.log('The Memory is: ' + this.extendedDeviceInformation.memory);
 * ```
 */
export declare class ExtendedDeviceInformation extends IonicNativePlugin {
    /**
     * Get the device's memory size
     */
    memory: number;
    /**
     * Get the device's CPU mhz
     */
    cpumhz: string;
    /**
     * Get the total storage
     */
    totalstorage: string;
}
