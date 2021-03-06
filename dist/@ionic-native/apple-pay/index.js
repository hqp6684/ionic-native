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
import { Observable } from 'rxjs/Observable';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Apple Pay
 * @description
 * A dependency free Cordova plugin to provide Apple Pay functionality.
 *
 * @usage
 * ```typescript
 * import { ApplePay } from '@ionic-native/apple-pay';
 *
 *
 * constructor(private applePay: ApplePay) { }
 *
 * ...
 * async applePay() {
 *   // This block is optional -- only if you need to update order items/shipping
 *   // methods in response to shipping method selections
 *   this.applePay.startListeningForShippingContactSelection()
 *     .subscribe(async selection => {
 *       try {
 *         await this.applePay.updateItemsAndShippingMethods({
 *           items: getFromSelection(selection),
 *           shippingMethods: getFromSelection(selection),
 *         });
 *       }
 *       catch {
 *         // handle update items error
 *       }
 *     });
 *
 *   try {
 *     const applePayTransaction = await this.applePay.makePaymentRequest({
 *       items,
 *       shippingMethods,
 *       merchantIdentifier,
 *       currencyCode,
 *       countryCode,
 *       billingAddressRequirement: ['name', 'email', 'phone'],
 *       shippingAddressRequirement: 'none',
 *       shippingType: 'shipping'
 *     });
 *
 *     const transactionStatus = await completeTransactionWithMerchant(applePayTransaction);
 *     await this.applePay.completeLastTransaction(transactionStatus);
 *   } catch {
 *     // handle payment request error
 *     // Can also handle stop complete transaction but these should normally not occur
 *   }
 *
 *   // only if you started listening before
 *   await this.applePay.stopListeningForShippingContactSelection();
 * }
 * ```
 */
var ApplePay = (function (_super) {
    __extends(ApplePay, _super);
    function ApplePay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Detects if the current device supports Apple Pay and has any capable cards registered.
     * @return {Promise<IMakePayments>} Returns a promise
     *
     * @usage
     * try {
     *   const message = await this.applePay.canMakePayments();
     *   // Apple Pay is enabled and a supported card is setup. Expect:
     *   // 'This device can make payments and has a supported card'
     * } catch (message) {
     *   // There is an issue, examine the message to see the details, will be:
     *   // 'This device cannot make payments.''
     *   // 'This device can make payments but has no supported cards'
     * }
     */
    ApplePay.prototype.canMakePayments = function () {
        return;
    };
    /**
     * Starts listening for shipping contact selection changes
     * Any time the user selects shipping contact, this callback will fire.
     * You *must* call `updateItemsAndShippingMethods` in response or else the
     * user will not be able to process payment.
     * @return {Observable<ISelectedShippingContact>} emits with shipping contact information on
     *   shipping contact selection changes
     */
    ApplePay.prototype.startListeningForShippingContactSelection = function () {
        return;
    };
    /**
     * Stops listening for shipping contact selection changes
     * @return {Promise} whether stop listening was successful. This should
     *   really only fail if this is called without starting listening
     */
    ApplePay.prototype.stopListeningForShippingContactSelection = function () {
        return;
    };
    /**
     * Update the list of pay sheet items and shipping methods in response to
     * a shipping contact selection event. This *must* be called in response to
     * any shipping contact selection event or else the user will not be able
     * to complete a transaction on the pay sheet. Do not call without
     * subscribing to shipping contact selection events first
     * @returns {Promise}
     *
     * @param {Object} including `items` and `shippingMethods` properties.
     *
     * @usage
     * this.applePay.startListeningForShippingContactSelection().pluck('shippingAddressState').subscribe(shippingAddressState => {
     *   let shippingMethods;
     *   if ('AK' === shippingAddressState) {
     *     shippingMethods = [{
     *         identifier: 'Alaska',
     *         label: 'Alaska',
     *         detail: 'For shipping to Alaska',
     *         amount: 9.99
     *     },];
     *   } else {
     *     shippingMethods = [{
     *         identifier: 'Continental',
     *         label: 'Continental',
     *         detail: 'For shipping Continentally',
     *         amount: 5.99
     *     }];
     *   }
     *   this.paySheetItems.shippingCost = {
     *      label: 'Shipping Cost',
     *      amount: shippingMethod[0].amount
     *   };
     *   this.applePay.updateItemsAndShippingMethods(this.paySheetItems, shippingMethods);
     * });
     */
    ApplePay.prototype.updateItemsAndShippingMethods = function (list) {
        return;
    };
    /**
     * Request a payment with Apple Pay
     * @return {Promise<IPaymentResponse>} Returns a promise that resolves when something happens
     *
     * @param order {IOrder}
     *
     * @usage
     * try {
     *   const paymentResponse = this.applePay.makePaymentRequest({
     *     items: [
     *       {
     *         label: '3 x Basket Items',
     *         amount: 49.99
     *       },
     *       {
     *         label: 'Next Day Delivery',
     *         amount: 3.99
     *       },
     *       {
     *         label: 'My Fashion Company',
     *         amount: 53.98
     *       }
     *     ],
     *     shippingMethods: [
     *       {
     *         identifier: 'NextDay',
     *         label: 'NextDay',
     *         detail: 'Arrives tomorrow by 5pm.',
     *         amount: 3.99
     *       },
     *       {
     *         identifier: 'Standard',
     *         label: 'Standard',
     *         detail: 'Arrive by Friday.',
     *         amount: 4.99
     *       },
     *       {
     *         identifier: 'SaturdayDelivery',
     *         label: 'Saturday',
     *         detail: 'Arrive by 5pm this Saturday.',
     *         amount: 6.99
     *       }
     *     ],
     *     merchantIdentifier: 'merchant.apple.test',
     *     currencyCode: 'GBP',
     *     countryCode: 'GB',
     *     billingAddressRequirement: 'none',
     *     shippingAddressRequirement: 'none',
     *     shippingType: 'shipping',
     *   });
     *
     *   // The user has authorized the payment.
     *
     *   // Handle the token, asynchronously, i.e. pass to your merchant bank to
     *   // action the payment, then once finished, depending on the outcome:
     *
     *   // Here is an example implementation:
     *
     *   const captureStatus = await MyPaymentProvider.authorizeApplePayToken(paymentResponse.paymentData);
     *   await this.applePay.completeLastTransaction('success');
     * }
     * catch (err) {
     *   if (isPaymentAuthError(err)) {
     *     this.completeLastTransaction('failure');
     *   }
     *   else {
     *     // Failed to open pay sheet or user canceled payment
     *   }
     * }
     */
    ApplePay.prototype.makePaymentRequest = function (order) {
        return;
    };
    /**
     * Once the makePaymentRequest has been resolved successfully, the device will be waiting for a completion event.
     * This means, that the application must proceed with the token authorisation and return a success, failure,
     * or other validation error. Once this has been passed back, the Apple Pay sheet will be dismissed via an animation.
     * @return {Promise<ICompleteTransaction>} Returns a promise that resolves after confirmation of payment authorization completion
     *
     * @param complete {ITransactionStatus}
     *
     */
    ApplePay.prototype.completeLastTransaction = function (complete) {
        return;
    };
    ApplePay.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ApplePay.ctorParameters = function () { return []; };
    __decorate([
        Cordova({
            otherPromise: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ApplePay.prototype, "canMakePayments", null);
    __decorate([
        Cordova({
            observable: true,
            clearFunction: 'stopListeningForShippingContactSelection'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], ApplePay.prototype, "startListeningForShippingContactSelection", null);
    __decorate([
        Cordova({
            otherPromise: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ApplePay.prototype, "stopListeningForShippingContactSelection", null);
    __decorate([
        Cordova({
            otherPromise: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], ApplePay.prototype, "updateItemsAndShippingMethods", null);
    __decorate([
        Cordova({
            otherPromise: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], ApplePay.prototype, "makePaymentRequest", null);
    __decorate([
        Cordova({
            otherPromise: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], ApplePay.prototype, "completeLastTransaction", null);
    ApplePay = __decorate([
        Plugin({
            pluginName: 'ApplePay',
            plugin: 'cordova-plugin-applepay',
            pluginRef: 'ApplePay',
            repo: 'https://github.com/samkelleher/cordova-plugin-applepay',
            platforms: ['iOS'],
        })
    ], ApplePay);
    return ApplePay;
}(IonicNativePlugin));
export { ApplePay };
//# sourceMappingURL=index.js.map