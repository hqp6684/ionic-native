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
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';
/**
 * @name Couchbase Lite
 * @description
 * Plugin to install Couchbase Lite in your PhoneGap app on iOS or Android
 *
 * @usage
 * ```typescript
 * import { CouchbaseLite } from '@ionic-native/couchbase-lite';
 * import { Http } from '@angular/http';
 * import { Observable } from 'rxjs/Observable'
 * constructor(private couchbase: CouchbaseLite, private platform:Platform,private _http:Http) {
 *    this.initMethod();
 * }
 * url:string;
 * initMethod() {
 *    this.couchbase.getURL().then((url)=> {
 *        this.url = url;
 *    })
 * }
 * getUrl() {
 *      return this.url;
 * }
 * // DATABASES //
 * createDatabase(database_name:string) {
 *      let url = this.getUrl();
 *      url = url+database_name;
 *      return this._http
 *        .put(url)
 *        .map(data => { this.results = data['results'] })
 *        .catch((error:any) => {
 *           return Observable.throw(error.json() || 'Couchbase Lite error');
 *         })
 *  }
 * deleteDatabase(database_name:string) {
 *      let url = this.getUrl();
 *      url = url+database_name;
 *      return this._http
 *        .delete(url)
 *        .map(data => { this.results = data['results'] })
 *        .catch((error:any) => {
 *           return Observable.throw(error.json() || 'Couchbase Lite error');
 *        })
 * }
 * getAllDbs() {
 *      let url = this.getUrl();
 *      url = url+'_all_dbs';
 *      return this._http
 *        .get(url)
 *        .map(data => { this.results = data['results'] })
 *        .catch((error:any) => {
 *           return Observable.throw(error.json() || 'Couchbase Lite error');
 *        })
 * }
 * // DOCUMENTS //
 * getAllDocuments(database_name:string){
 *      let url = this.getUrl();
 *      // include_docs=true will include a doc inside response, it is false by default
 *      url = url + database_name + '/_all_docs?include_docs=true';
 *      return this._http
 *        .get(url)
 *        .map(data => { this.results = data['results'] })
 *        .catch((error:any) => {
 *           return Observable.throw(error.json() || 'Couchbase Lite error');
 *        })        .
 * }
 * createDocument(database_name:string,document){
 *      let url = this.getUrl();
 *      url = url + database_name;
 *      return this._http
 *        .post(url,document)
 *        .map(data => { this.results = data['results'] })
 *        .catch((error:any) => {
 *           return Observable.throw(error.json() || 'Couchbase Lite error');
 *        })        .
 * }
 * let document = {
 *    _id:'You can either specify the document ID (must be string) else couchbase generates one for your doc',
 *    data:{name:'sandman',age:25,city:pune}
 *  }
 * createDocument('justbe', document);
 * // successful response
 * { "id": "string","rev": "string","ok": true }
 * updateDocument(database_name:string,document){
 *      let url = this.getUrl();
 *      url = url + database_name + '/' + document._id;
 *      return this._http
 *        .put(url,document)
 *        .map(data => { this.results = data['results'] })
 *        .catch((error:any) => {
 *           return Observable.throw(error.json() || 'Couchbase Lite error');
 *        })        .
 * }
 * // for updation of document your document must contain most recent rev(revision) id.
 * // for each updation of document new rev id is get generated
 * // successful response
 * { "id": "string","rev": "string(new revision id)","ok": true }
 * deleteDocument(database_name:string,document){
 *      let url = this.getUrl();
 *      url = url + database_name + '/' + document._id +'?rev='+doc._rev;
 *      return this._http
 *        .delete(url)
 *        .map(data => { this.results = data['results'] })
 *        .catch((error:any) => {
 *           return Observable.throw(error.json() || 'Couchbase Lite error');
 *        })        .
 * }
 *
 *
 * ```
 */
var CouchbaseLite = (function (_super) {
    __extends(CouchbaseLite, _super);
    function CouchbaseLite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get the database url
     * @return {Promise<any>} Returns a promise that resolves with the local database url
     */
    CouchbaseLite.prototype.getURL = function () { return; };
    CouchbaseLite.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CouchbaseLite.ctorParameters = function () { return []; };
    __decorate([
        Cordova({
            callbackStyle: 'node'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CouchbaseLite.prototype, "getURL", null);
    CouchbaseLite = __decorate([
        Plugin({
            pluginName: 'CouchbaseLite',
            plugin: 'couchbase-lite-phonegap-plugin',
            pluginRef: 'cblite',
            repo: 'https://github.com/couchbaselabs/Couchbase-Lite-PhoneGap-Plugin',
            platforms: ['Android', 'iOS']
        })
    ], CouchbaseLite);
    return CouchbaseLite;
}(IonicNativePlugin));
export { CouchbaseLite };
//# sourceMappingURL=index.js.map