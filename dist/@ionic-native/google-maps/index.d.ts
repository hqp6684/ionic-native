import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
export declare type MapType = 'MAP_TYPE_NORMAL' | 'MAP_TYPE_ROADMAP' | 'MAP_TYPE_SATELLITE' | 'MAP_TYPE_HYBRID' | 'MAP_TYPE_TERRAIN' | 'MAP_TYPE_NONE';
/**
 * @hidden
 */
export declare class LatLng implements ILatLng {
    lat: number;
    lng: number;
    constructor(lat: number, lng: number);
    equals(other: ILatLng): boolean;
    toString(): string;
    toUrlValue(precision?: number): string;
}
export interface ILatLngBounds {
    northeast: ILatLng;
    southwest: ILatLng;
}
/**
 * @hidden
 */
export declare class LatLngBounds implements ILatLngBounds {
    private _objectInstance;
    northeast: ILatLng;
    southwest: ILatLng;
    type: string;
    constructor(points?: ILatLng[]);
    /**
     * Converts to string
     * @return {string}
     */
    toString(): string;
    /**
     * Returns a string of the form "lat_sw,lng_sw,lat_ne,lng_ne" for this bounds, where "sw" corresponds to the southwest corner of the bounding box, while "ne" corresponds to the northeast corner of that box.
     * @param precision {number}
     * @return {string}
     */
    toUrlValue(precision?: number): string;
    /**
     * Extends this bounds to contain the given point.
     * @param LatLng {ILatLng}
     */
    extend(LatLng: ILatLng): void;
    /**
     * Returns true if the given lat/lng is in this bounds.
     * @param LatLng {ILatLng}
     */
    contains(LatLng: ILatLng): boolean;
    /**
     * Computes the center of this LatLngBounds
     * @return {LatLng}
     */
    getCenter(): LatLng;
}
export interface GoogleMapControlOptions {
    /**
     * Turns the compass on or off.
     */
    compass?: boolean;
    /**
     * Turns the myLocation button on or off. If turns on this button, the application displays a permission dialog to obtain the geolocation data.
     */
    myLocationButton?: boolean;
    /**
     * Turns the myLocation control(blue dot) on or off. If turns on this control, the application displays a permission dialog to obtain the geolocation data.
     */
    myLocation?: boolean;
    /**
     * Turns the indoor picker on or off.
     */
    indoorPicker?: boolean;
    /**
     * **Android**
     * Turns the map toolbar on or off.
     */
    mapToolbar?: boolean;
    /**
     * **Android**
     * Turns the zoom controller on or off.
     */
    zoom?: boolean;
    /**
     * Accept extra properties for future updates
     */
    [key: string]: any;
}
export interface GoogleMapGestureOptions {
    /**
     * Set false to disable the scroll gesture (default: true)
     */
    scroll?: boolean;
    /**
     * Set false to disable the tilt gesture (default: true)
     */
    tilt?: boolean;
    /**
     * Set false to disable the zoom gesture (default: true)
     */
    zoom?: boolean;
    /**
     * Set false to disable the rotate gesture (default: true)
     */
    rotate?: boolean;
    /**
     * Accept extra properties for future updates
     */
    [key: string]: any;
}
export interface GoogleMapZoomOptions {
    minZoom?: number;
    maxZoom?: number;
}
export interface GoogleMapPaddingOptions {
    left?: number;
    top?: number;
    bottom?: number;
    right?: number;
}
export interface GoogleMapPreferenceOptions {
    /**
     * Minimum and maximum zoom levels for zooming gestures.
     */
    zoom?: GoogleMapZoomOptions;
    /**
     * Paddings of controls.
     */
    padding?: GoogleMapPaddingOptions;
    /**
     * Turns the 3D buildings layer on or off.
     */
    building?: boolean;
    /**
     * Accept extra properties for future updates
     */
    [key: string]: any;
}
export interface GoogleMapOptions {
    /**
     * mapType [options]
     */
    mapType?: MapType;
    /**
     * controls [options]
     */
    controls?: GoogleMapControlOptions;
    /**
     * gestures [options]
     */
    gestures?: GoogleMapGestureOptions;
    /**
     * Map styles [options]
     * @ref https://developers.google.com/maps/documentation/javascript/style-reference
     */
    styles?: any[];
    /**
     * Initial camera position [options]
     */
    camera?: CameraPosition<any>;
    /**
     * preferences [options]
     */
    preferences?: GoogleMapPreferenceOptions;
    /**
     * Accept extra properties for future updates
     */
    [key: string]: any;
}
export interface CameraPosition<T> {
    /**
     * The center location of the camera view.
     *
     * [usage 1]
     *
     * let cameraPos: CameraPosition<ILatLng> = {
     *   target: {lat: ..., lng: ...},
     *   zoom: 10
     * }
     *
     * [usage 2] The zoom property is ignored when you specify multiple position
     *
     * let cameraPos: CameraPosition<ILatLng[]> = {
     *   target: [
     *      {lat: ..., lng: ...},
     *      {lat: ..., lng: ...},
     *      {lat: ..., lng: ...}
     *   ]
     * }
     */
    target?: T;
    /**
     * View angle
     */
    tilt?: number;
    /**
     * Zoom level
     */
    zoom?: number;
    /**
     * Map orientation
     */
    bearing?: number;
    /**
     * The duration of animation in milliseconds
     */
    duration?: number;
    /**
     * Camera padding in pixel
     */
    padding?: number;
}
export interface CircleOptions {
    /**
     * Center position of circle
     */
    center: ILatLng;
    /**
     * Radius of circle in meter
     */
    radius: number;
    /**
     * Set the stroke color
     * (rgb, rgba, #RRGGBB, "colorname", ...etc)
     */
    strokeColor?: string;
    /**
     * Set the stroke width in pixel
     */
    strokeWidth?: number;
    /**
     * Set the inside color of polygon
     * (rgb, rgba, #RRGGBB, "colorname", ...etc)
     */
    fillColor?: string;
    /**
     * Set to true to receive the CIRCLE_CLICK event
     * (default: false)
     */
    clickable?: boolean;
    /**
     * Set to false to hide
     */
    visible?: boolean;
    /**
     * Z-index
     */
    zIndex?: number;
    /**
     * Accept own properties
     * You can get the property later using `get()` method.
     */
    [key: string]: any;
}
export interface GeocoderRequest {
    /**
     * The address property or position property is required.
     * You can not specify both property at the same time.
     *
     * [geocoding usage1]
     * let request: GeocoderRequest = {
     *   address: "Los Angeles, California, USA"
     * };
     *
     * [geocoding usage2]
     * let request: GeocoderRequest = {
     *   address: [
     *    "Los Angeles, California, USA",
     *    "San Francisco, California, USA",
     *   ]
     * };
     */
    address?: string | string[];
    /**
     *
     * [reverse-geocoding usage1]
     * let request: GeocoderRequest = {
     *   position: {"lat": 37.421655, "lng": -122.085637}
     * };
     *
     * [reverse-geocoding usage2]
     * let request: GeocoderRequest = {
     *   address: [
     *    {"lat": 37.421655, "lng": -122.085637},
     *    {"lat": 37.332, "lng": -122.030781}
     *   ]
     * };
     */
    position?: ILatLng | ILatLng[];
}
export interface GeocoderResult {
    adminArea?: string;
    country?: string;
    countryCode?: string;
    extra?: {
        featureName?: string;
        lines?: Array<string>;
        permises?: string;
        phone?: string;
        url?: string;
    };
    locale?: string;
    locality?: string;
    position?: ILatLng;
    postalCode?: string;
    subAdminArea?: string;
    subLocality?: string;
    subThoroughfare?: string;
    thoroughfare?: string;
}
export interface GroundOverlayOptions {
    /**
     * URL of overlay
     */
    url: string;
    /**
     * Bounds, array of ILatLng
     */
    bounds: Array<ILatLng>;
    /**
     * Set to true to receive the GROUND_OVERLAY_CLICK event
     * (default: false)
     */
    clickable?: boolean;
    /**
     * Set to false to hide
     */
    visible?: boolean;
    /**
     * Opacity. From 0.0 to 1.0 .
     */
    opacity?: number;
    /**
     * Bearing
     */
    bearing?: number;
    /**
     * Z-index
     */
    zIndex?: number;
    /**
     * Accept own properties
     * You can get the property later using `get()` method.
     */
    [key: string]: any;
}
export interface ILatLng {
    lat: number;
    lng: number;
}
export interface MarkerIcon {
    url?: string;
    size?: {
        width?: number;
        height?: number;
    };
}
export interface MarkerOptions {
    /**
     * The icon image url or properties. Also you can specify HTML Color values. Alternatively you can specify the image as Base64
     */
    icon?: any;
    /**
     * The content of the infoWindow.
     */
    title?: string;
    /**
     * The snippet of the infoWindow.
     */
    snippet?: string;
    /**
     * The position of the marker.
     */
    position?: ILatLng;
    /**
     * 	Specify the anchor of the InfoWindow
     */
    infoWindowAnchor?: number[];
    /**
     * Set true if you want to enable to drag the marker. (Default: false) Important! Drag starts after long pressed on the marker.
     */
    draggable?: boolean;
    /**
     * 	Set true if you want to use a flat marker. (Default: false)
     */
    flat?: boolean;
    /**
     * 	Set rotation angle. (Default: 0)
     */
    rotation?: number;
    /**
     * Set false if you want to hide. (Default: true)
     */
    visible?: boolean;
    /**
     * Specify the options for title. This property work for normal InfoWindow.
     */
    styles?: any;
    /**
     * Which animation to play when marker is added to a map.
     */
    animation?: string;
    /**
     * Higher zIndex value overlays will be drawn on top of lower zIndex value tile layers and overlays.
     */
    zIndex?: number;
    /**
     * Set to true to disable auto panning when the marker is clicked.
     */
    disableAutoPan?: boolean;
    /**
     * Accept own properties
     * You can get the property later using `get()` method.
     */
    [key: string]: any;
}
export interface MarkerClusterOptions {
    /**
     * Maximum zoom level of clustering
     * (default: 15, max: 18)
     */
    maxZoomLevel?: number;
    /**
     * Draw a rectangle that contains all locations of clustered when you tap on a clister marker.
     * (default: true)
     */
    boundsDraw?: boolean;
    /**
     * Position list
     * [
     *   {title: "store A", position: {lat: ..., lng: ...}},
     *   {title: "store B", position: {lat: ..., lng: ...}},
     *   {title: "store C", position: {lat: ..., lng: ...}}
     * ]
     */
    markers: MarkerOptions[];
    /**
     * Conditions of clustering
     * [
     *   {icon: "assets/small.png", min: 2, max: 10},
     *   {icon: "assets/middle.png", min: 11, max: 30},
     *   {icon: "assets/large.png", min: 31},
     * ]
     */
    icons: any[];
    /**
     * Accept own properties
     * You can get the property later using `get()` method.
     */
    [key: string]: any;
}
export interface MyLocation {
    latLng?: LatLng;
    elapsedRealtimeNanos?: any;
    time?: string;
    accuracy?: any;
    bearing?: number;
    altitude?: any;
    speed?: number;
    provider?: any;
    hashCode?: any;
}
export interface MyLocationOptions {
    /**
     * Set true if you want to try to use GPS mandatory.
     * (In false, the plugin try to use GPS and network)
     * (default: false)
     */
    enableHighAccuracy?: boolean;
}
export interface PolygonOptions {
    /**
     * Pass ILatLng[] to specify the vertixes.
     * You need to contain two points at least.
     */
    points: Array<ILatLng>;
    /**
     * Set true if you want to draw the curve polygon based on the earth
     * (default: false)
     */
    geodesic?: boolean;
    /**
     * Set the stroke color
     * (rgb, rgba, #RRGGBB, "colorname", ...etc)
     */
    strokeColor?: string;
    /**
     * Set the stroke width in pixel
     */
    strokeWidth?: number;
    /**
     * Set the inside color of polygon
     * (rgb, rgba, #RRGGBB, "colorname", ...etc)
     */
    fillColor?: string;
    /**
     * Set false if you want to create invisible polygon
     * (Invisible polygon is not clickable, default true)
     */
    visible?: boolean;
    /**
     * Hierarchy z-index
     */
    zIndex?: number;
    /**
     * Pass ILatLng[][] to create holes in polygon
     */
    addHole?: Array<Array<ILatLng>>;
    /**
     * Set true if you want to receive the POLYGON_CLICK event
     * (default: false)
     */
    clickable?: boolean;
    /**
     * Accept own properties
     * You can get the property later using `get()` method.
     */
    [key: string]: any;
}
export interface PolylineOptions {
    /**
     * Pass ILatLng[] to specify the vertixes.
     * You need to contain two points at least.
     */
    points: Array<ILatLng>;
    /**
     * Set false if you want to create invisible polyline
     * (Invisible polyline is not clickable, default true)
     */
    visible?: boolean;
    /**
     * Set true if you want to draw the curve polyline based on the earth
     * (default: false)
     */
    geodesic?: boolean;
    /**
     * Set the stroke color
     * (rgb, rgba, #RRGGBB, "colorname", ...etc)
     */
    color?: string;
    /**
     * Set the stroke width in pixel
     */
    width?: number;
    /**
     * Hierarchy z-index
     */
    zIndex?: number;
    /**
     * Set true if you want to receive the POLYLINE_CLICK event
     * (default: false)
     */
    clickable?: boolean;
    /**
     * Accept own properties
     * You can get the property later using `get()` method.
     */
    [key: string]: any;
}
export interface TileOverlayOptions {
    /**
     * This callback must return string of image URL.
     * If no tile, you need to return null.
     */
    getTile: (x: number, y: number, zoom: number) => string;
    /**
     * Set false if you want to create invisible tilelayer
     * (default true)
     */
    visible?: boolean;
    /**
     * Hierarchy z-index of tilelayer
     */
    zIndex?: number;
    /**
     * Default: 512px
     */
    tileSize?: number;
    /**
     * Default: 1.0
     */
    opacity?: number;
    /**
     * Set true if you want to display the tile information over the tile images.
     */
    debug?: boolean;
    /**
     * Accept own properties
     * You can get the property later using `get()` method.
     */
    [key: string]: any;
}
export interface ToDataUrlOptions {
    /**
     * True if you want get high quality map snapshot
     */
    uncompress?: boolean;
}
/**
 * Options for map.addKmlOverlay() method
 */
export interface KmlOverlayOptions {
    url: string;
    clickable?: boolean;
    suppressInfoWindows?: boolean;
    /**
     * Accept own properties for future update
     */
    [key: string]: any;
}
/**
 * @hidden
 */
export declare class VisibleRegion implements ILatLngBounds {
    private _objectInstance;
    /**
     * The northeast of the bounds that contains the farLeft, farRight, nearLeft and nearRight.
     * Since the map view is able to rotate, the farRight is not the same as the northeast.
     */
    northeast: ILatLng;
    /**
     * The southwest of the bounds that contains the farLeft, farRight, nearLeft and nearRight.
     * Since the map view is able to rotate, the nearLeft is not the same as the southwest.
     */
    southwest: ILatLng;
    /**
     * The nearRight indicates the lat/lng of the top-left of the map view.
     */
    farLeft: ILatLng;
    /**
     * The nearRight indicates the lat/lng of the top-right of the map view.
     */
    farRight: ILatLng;
    /**
     * The nearRight indicates the lat/lng of the bottom-left of the map view.
     */
    nearLeft: ILatLng;
    /**
     * The nearRight indicates the lat/lng of the bottom-right of the map view.
     */
    nearRight: ILatLng;
    /**
     * constant value : `VisibleRegion`
     */
    type: string;
    constructor(southwest: LatLngBounds, northeast: LatLngBounds, farLeft: ILatLng, farRight: ILatLng, nearLeft: ILatLng, nearRight: ILatLng);
    /**
     * Converts to string
     * @return {string}
     */
    toString(): string;
    /**
     * Returns a string of the form "lat_sw,lng_sw,lat_ne,lng_ne" for this bounds, where "sw" corresponds to the southwest corner of the bounding box, while "ne" corresponds to the northeast corner of that box.
     * @param precision {number}
     * @return {string}
     */
    toUrlValue(precision?: number): string;
    /**
     * Returns true if the given lat/lng is in this bounds.
     * @param LatLng {ILatLng}
     */
    contains(LatLng: ILatLng): boolean;
}
/**
 * @hidden
 * You can listen to these events where appropriate
 */
export declare const GoogleMapsEvent: {
    MAP_READY: string;
    MAP_CLICK: string;
    MAP_LONG_CLICK: string;
    POI_CLICK: string;
    MY_LOCATION_CLICK: string;
    MY_LOCATION_BUTTON_CLICK: string;
    INDOOR_BUILDING_FOCUSED: string;
    INDOOR_LEVEL_ACTIVATED: string;
    CAMERA_MOVE_START: string;
    CAMERA_MOVE: string;
    CAMERA_MOVE_END: string;
    OVERLAY_CLICK: string;
    POLYGON_CLICK: string;
    POLYLINE_CLICK: string;
    CIRCLE_CLICK: string;
    GROUND_OVERLAY_CLICK: string;
    INFO_CLICK: string;
    INFO_LONG_CLICK: string;
    INFO_CLOSE: string;
    INFO_OPEN: string;
    MARKER_CLICK: string;
    MARKER_DRAG: string;
    MARKER_DRAG_START: string;
    MARKER_DRAG_END: string;
    MAP_DRAG: string;
    MAP_DRAG_START: string;
    MAP_DRAG_END: string;
    KML_CLICK: string;
};
/**
 * @hidden
 */
export declare const GoogleMapsAnimation: {
    [animationName: string]: string;
};
/**
 * @hidden
 */
export declare const GoogleMapsMapTypeId: {
    [mapType: string]: MapType;
};
/**
 * @name Google Maps
 * @description
 * This plugin uses the native Google Maps SDK
 * Note: As of Ionic native 4.0, this using the 2.0 version of the google maps plugin. Please make sure your plugin is updated
 * @usage
 * ```typescript
 * import {
 *  GoogleMaps,
 *  GoogleMap,
 *  GoogleMapsEvent,
 *  GoogleMapOptions,
 *  CameraPosition,
 *  MarkerOptions,
 *  Marker
 * } from '@ionic-native/google-maps';
 * import { Component } from "@angular/core/";
 *
 * @Component({
 *   selector: 'page-home',
 *   templateUrl: 'home.html'
 * })
 * export class HomePage {
 *   map: GoogleMap;
 *   constructor() { }
 *
 *   ionViewDidLoad() {
 *    this.loadMap();
 *   }
 *
 *  loadMap() {
 *
 *     let mapOptions: GoogleMapOptions = {
 *       camera: {
 *         target: {
 *           lat: 43.0741904,
 *           lng: -89.3809802
 *         },
 *         zoom: 18,
 *         tilt: 30
 *       }
 *     };
 *
 *     this.map = GoogleMaps.create('map_canvas', mapOptions);
 *
 *     // Wait the MAP_READY before using any methods.
 *     this.map.one(GoogleMapsEvent.MAP_READY)
 *       .then(() => {
 *         console.log('Map is ready!');
 *
 *         // Now you can use all methods safely.
 *         this.map.addMarker({
 *             title: 'Ionic',
 *             icon: 'blue',
 *             animation: 'DROP',
 *             position: {
 *               lat: 43.0741904,
 *               lng: -89.3809802
 *             }
 *           })
 *           .then(marker => {
 *             marker.on(GoogleMapsEvent.MARKER_CLICK)
 *               .subscribe(() => {
 *                 alert('clicked');
 *               });
 *           });
 *
 *       });
 *   }
 * }
 *
 * ```
 * @classes
 * GoogleMap
 * Circle
 * Encoding
 * Environment
 * Geocoder
 * GroundOverlay
 * HtmlInfoWindow
 * Geocoder
 * LatLng
 * LatLngBounds
 * Marker
 * MarkerCluster
 * Polygon
 * Polyline
 * Spherical
 * KmlOverlay
 * Poly
 * TileOverlay
 * BaseClass
 * BaseArrayClass
 * @interfaces
 * GoogleMapOptions
 * CameraPosition
 * CircleOptions
 * GeocoderRequest
 * GeocoderResult
 * GroundOverlayOptions
 * ILatLng
 * MarkerIcon
 * MarkerOptions
 * MarkerClusterIcon
 * MarkerClusterOptions
 * MyLocation
 * MyLocationOptions
 * PolygonOptions
 * PolylineOptions
 * TileOverlayOptions
 * KmlOverlayOptions
 * VisibleRegion
 */
export declare class GoogleMaps extends IonicNativePlugin {
    /**
     * Creates a new GoogleMap instance
     * @param element {string | HTMLElement} Element ID or reference to attach the map to
     * @param options {GoogleMapOptions} [options] Options
     * @return {GoogleMap}
     */
    static create(element: string | HTMLElement | GoogleMapOptions, options?: GoogleMapOptions): GoogleMap;
    /**
     * @deprecation
     * @hidden
     */
    create(element: string | HTMLElement | GoogleMapOptions, options?: GoogleMapOptions): GoogleMap;
}
/**
 * @hidden
 * https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/class/BaseClass/README.md
 */
export declare class BaseClass {
    protected _objectInstance: any;
    /**
     * Adds an event listener.
     * @param eventName {string} event name you want to observe.
     * @return {Observable<any>}
     */
    addEventListener(eventName: string): Observable<any>;
    /**
     * Adds an event listener that works once.
     * @param eventName {string} event name you want to observe.
     * @return {Promise<any>}
     */
    addListenerOnce(eventName: string): Promise<any>;
    /**
     * Gets a value
     * @param key {any}
     */
    get(key: string): any;
    /**
     * Sets a value
     * @param key {string} The key name for the value. `(key)_changed` will be fired when you set value through this method.
     * @param value {any}
     * @param noNotify {boolean} [options] True if you want to prevent firing the `(key)_changed` event.
     */
    set(key: string, value: any, noNotify?: boolean): void;
    /**
     * Bind a key to another object
     * @param key {string} The property name you want to observe.
     * @param target {any} The target object you want to observe.
     * @param targetKey? {string} [options]  The property name you want to observe. If you omit this, the `key` argument is used.
     * @param noNotify? {boolean} [options] True if you want to prevent `(key)_changed` event when you bind first time, because the internal status is changed from `undefined` to something.
     */
    bindTo(key: string, target: any, targetKey?: string, noNotify?: boolean): void;
    /**
     * Alias of `addEventListener`
     * @param key {string} The property name you want to observe.
     * @return {Observable<any>}
     */
    on(eventName: string): Observable<any>;
    /**
     * Alias of `addEventListenerOnce`
     * @param key {string} The property name you want to observe.
     * @return {Promise<any>}
     */
    one(eventName: string): Promise<any>;
    /**
     * Clears all stored values
     */
    empty(): void;
    /**
     * Dispatch event.
     * @param eventName {string} Event name
     * @param parameters {any} [options] The data you want to pass to event listerners.
     */
    trigger(eventName: string, ...parameters: any[]): void;
    /**
     * Executes off() and empty()
     */
    destroy(): void;
    /**
     * Remove event listener(s)
     * The `removeEventListener()` has three usages:
     *  - removeEventListener("eventName", listenerFunction);
     *     This removes one particular event listener
     *  - removeEventListener("eventName");
     *     This removes the event listeners that added for the event name.
     *  - removeEventListener();
     *     This removes all listeners.
     *
     * @param eventName {string} [options] Event name
     * @param listener {Function} [options] Event listener
     */
    removeEventListener(eventName?: string, listener?: (...parameters: any[]) => void): void;
    /**
     * Alias of `removeEventListener`
     *
     * @param eventName {string} [options] Event name
     * @param listener {Function} [options] Event listener
     */
    off(eventName?: string, listener?: (...parameters: any[]) => void): void;
}
/**
 * @hidden
 * https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/class/BaseArrayClass/README.md
 */
export declare class BaseArrayClass<T> extends BaseClass {
    constructor(initialData?: T[] | any);
    /**
     * Removes all elements from the array.
     * @param noNotify? {boolean} [options] Set true to prevent remove_at events.
     */
    empty(noNotify?: boolean): void;
    /**
     * Iterate over each element, calling the provided callback.
     * @param fn {Function}
     */
    forEach(fn: (element: T, index?: number) => void): void;
    /**
     * Iterate over each element, calling the provided callback.
     * @param fn {Function}
     * @return {Promise<any>}
     */
    forEachAsync(fn: ((element: T, callback: () => void) => void)): Promise<void>;
    /**
     * Iterate over each element, then return a new value.
     * Then you can get the results of each callback.
     * @param fn {Function}
     * @return {Array<Object>} returns a new array with the results
     */
    map(fn: (element: T, index: number) => any): any[];
    /**
     * Iterate over each element, calling the provided callback.
     * Then you can get the results of each callback.
     * @param fn {Function}
     * @param callback {Function}
     * @return {Promise<any>} returns a new array with the results
     */
    mapAsync(fn: ((element: T, callback: (newElement: any) => void) => void)): Promise<any[]>;
    /**
     * Same as `mapAsync`, but keep the execution order
     * @param fn {Function}
     * @param callback {Function}
     * @return {Promise<any>} returns a new array with the results
     */
    mapSeries(fn: ((element: T, callback: (newElement: any) => void) => void)): Promise<any[]>;
    /**
     * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
     * @param fn {Function}
     * @return {Array<Object>} returns a new filtered array
     */
    filter(fn: (element: T, index: number) => boolean): T[];
    /**
     * The filterAsync() method creates a new array with all elements that pass the test implemented by the provided function.
     * @param fn {Function}
     * @param callback {Function}
     * @return {Promise<any>} returns a new filtered array
     */
    filterAsync(fn: (element: T, callback: (result: boolean) => void) => void): Promise<T[]>;
    /**
     * Returns a reference to the underlying Array.
     * @return {Array<Object>}
     */
    getArray(): T[];
    /**
     * Returns the element at the specified index.
     * @param index {number}
     * @return {Object}
     */
    getAt(index: number): any;
    /**
     * Returns the number of the elements.
     * @return {number}
     */
    getLength(): number;
    /**
     * The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
     * @param element {Object}
     * @return {number}
     */
    indexOf(element: T): number;
    /**
     * The reverse() method reverses an array in place.
     */
    reverse(): void;
    /**
     * The sort() method sorts the elements of an array in place and returns the array.
     */
    sort(): void;
    /**
     * Inserts an element at the specified index.
     * @param index {number}
     * @param element {Object}
     * @param noNotify? {boolean} [options] Set true to prevent insert_at events.
     * @return {Object}
     */
    insertAt(index: number, element: T, noNotify?: boolean): void;
    /**
     * Removes the last element of the array and returns that element.
     * @param noNotify? {boolean} [options] Set true to prevent remove_at events.
     * @return {Object}
     */
    pop(noNotify?: boolean): T;
    /**
     * Adds one element to the end of the array and returns the new length of the array.
     * @param element {object}
     * @param noNotify? {boolean} Set true to prevent insert_at events.
     */
    push(element: T, noNotify?: boolean): void;
    /**
     * Removes an element from the specified index.
     * @param index {number}
     * @param noNotify? {boolean} [options] Set true to prevent remove_at events.
     */
    removeAt(index: number, noNotify?: boolean): void;
    /**
     * Sets an element at the specified index.
     * @param index {number}
     * @param element {object}
     * @param noNotify? {boolean} [options] Set true to prevent set_at events.
     */
    setAt(index: number, element: T, noNotify?: boolean): void;
}
/**
 * @hidden
 * https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/class/Circle/README.md
 */
export declare class Circle extends BaseClass {
    private _map;
    constructor(_map: GoogleMap, _objectInstance: any);
    /**
     * Return the ID of instance.
     * @return {string}
     */
    getId(): string;
    /**
     * Return the map instance.
     * @return {GoogleMap}
     */
    getMap(): GoogleMap;
    /**
     * Change the center position.
     * @param latLng {ILatLng}
     */
    setCenter(latLng: ILatLng): void;
    /**
     * Return the current center position
     * @return {ILatLng}
     */
    getCenter(): ILatLng;
    /**
     * Return the current circle radius.
     * @return {number}
     */
    getRadius(): number;
    /**
     * Change the circle radius.
     * @param radius {number}
     */
    setRadius(radius: number): void;
    /**
     * Change the filling color (inner color).
     * @param color {string}
     */
    setFillColor(color: string): void;
    /**
     * Return the current circle filling color (inner color).
     * @return {string}
     */
    getFillColor(): string;
    /**
     * Change the stroke width.
     * @param strokeWidth {number}
     */
    setStrokeWidth(strokeWidth: number): void;
    /**
     * Return the current circle stroke width (unit: pixel).
     * @return {number}
     */
    getStrokeWidth(): number;
    /**
     * Change the stroke color (outter color).
     * @param strokeColor {string}
     */
    setStrokeColor(strokeColor: string): void;
    /**
     * Return the current circle stroke color (outer color).
     * @return {string}
     */
    getStrokeColor(): string;
    /**
     * Change clickablity of the circle.
     * @param clickable {boolean}
     */
    setClickable(clickable: boolean): void;
    /**
     * Return true if the circle is clickable.
     * @return {boolean}
     */
    getClickable(): boolean;
    /**
     * Change the circle zIndex order.
     * @param zIndex {number}
     */
    setZIndex(zIndex: number): void;
    /**
     * Return the current circle zIndex.
     * @return {number}
     */
    getZIndex(): number;
    /**
     * Remove the circle.
     */
    remove(): void;
    /**
     * Return the latLngBounds (rectangle) that contains the circle.
     * @return {LatLngBounds}
     */
    getBounds(): LatLngBounds;
    /**
     * Set circle visibility
     * @param visible {boolean}
     */
    setVisible(visible: boolean): void;
    /**
     * Returns a boolean that indicates whether the circle is visible
     * @return {boolean}
     */
    getVisible(): boolean;
}
/**
 * @hidden
 */
export declare class Environment {
    /**
     * Get the open source software license information for Google Maps SDK for iOS.
     * @return {Promise<any>}
     */
    static getLicenseInfo(): Promise<any>;
    /**
     * @deprecation
     * @hidden
     */
    getLicenseInfo(): Promise<any>;
    /**
     * Specifies the background color of the app.
     * @param color
     */
    static setBackgroundColor(color: string): void;
    /**
     * @deprecation
     * @hidden
     */
    setBackgroundColor(color: string): void;
}
/**
 * @hidden
 */
export declare class Geocoder {
    /**
     * @deprecation
     * @hidden
     */
    geocode(request: GeocoderRequest): Promise<GeocoderResult[] | BaseArrayClass<GeocoderResult>>;
    /**
     * Converts position to address and vice versa
     * @param {GeocoderRequest} request Request object with either an address or a position
     * @return {Promise<GeocoderResult[] | BaseArrayClass<GeocoderResult>>}
     */
    static geocode(request: GeocoderRequest): Promise<GeocoderResult[] | BaseArrayClass<GeocoderResult>>;
}
/**
 * @hidden
 */
export declare class LocationService {
    /**
     * Get the current device location without map
     * @return {Promise<MyLocation>}
     */
    static getMyLocation(options?: MyLocationOptions): Promise<MyLocation>;
}
/**
 * @hidden
 */
export declare class Encoding {
    /**
     * @deprecation
     * @hidden
     */
    decodePath(encoded: string, precision?: number): Array<ILatLng>;
    /**
     * @deprecation
     * @hidden
     */
    encodePath(path: Array<ILatLng> | BaseArrayClass<ILatLng>): string;
    /**
     * Decodes an encoded path string into a sequence of LatLngs.
     * @param encoded {string} an encoded path string
     * @param precision? {number} default: 5
     * @return {ILatLng[]}
     */
    static decodePath(encoded: string, precision?: number): Array<ILatLng>;
    /**
     * Encodes a sequence of LatLngs into an encoded path string.
     * @param path {Array<ILatLng> | BaseArrayClass<ILatLng>} a sequence of LatLngs
     * @return {string}
     */
    static encodePath(path: Array<ILatLng> | BaseArrayClass<ILatLng>): string;
}
/**
 * @hidden
 */
export declare class Poly {
    /**
     * Returns true if the speicified location is in the polygon path
     * @param location {ILatLng}
     * @param path {ILatLng[]}
     * @return {boolean}
     */
    static containsLocation(location: ILatLng, path: ILatLng[]): boolean;
    /**
     * Returns true if the speicified location is on the polyline path
     * @param location {ILatLng}
     * @param path {ILatLng[]}
     * @return {boolean}
     */
    static isLocationOnEdge(location: ILatLng, path: ILatLng[]): boolean;
}
/**
 * @hidden
 */
export declare class Spherical {
    /**
     * @deprecation
     * @hidden
     */
    computeDistanceBetween(from: ILatLng, to: ILatLng): number;
    /**
     * @deprecation
     * @hidden
     */
    computeOffset(from: ILatLng, distance: number, heading: number): LatLng;
    /**
     * @deprecation
     * @hidden
     */
    computeOffsetOrigin(to: ILatLng, distance: number, heading: number): LatLng;
    /**
     * @deprecation
     * @hidden
     */
    computeLength(path: Array<ILatLng> | BaseArrayClass<ILatLng>): number;
    /**
     * @deprecation
     * @hidden
     */
    computeArea(path: Array<ILatLng> | BaseArrayClass<ILatLng>): number;
    /**
     * @deprecation
     * @hidden
     */
    computeSignedArea(path: Array<ILatLng> | BaseArrayClass<ILatLng>): number;
    /**
     * @deprecation
     * @hidden
     */
    computeHeading(from: ILatLng, to: ILatLng): number;
    /**
     * @deprecation
     * @hidden
     */
    interpolate(from: ILatLng, to: ILatLng, fraction: number): LatLng;
    /**
     * Returns the distance, in meters, between two LatLngs.
     * @param locationA {ILatLng}
     * @param locationB {ILatLng}
     * @return {number}
     */
    static computeDistanceBetween(from: ILatLng, to: ILatLng): number;
    /**
     * Returns the LatLng resulting from moving a distance from an origin in the specified heading (expressed in degrees clockwise from north)
     * @param from {ILatLng}
     * @param distance {number}
     * @param heading {number}
     * @return {LatLng}
     */
    static computeOffset(from: ILatLng, distance: number, heading: number): LatLng;
    /**
     * Returns the location of origin when provided with a LatLng destination, meters travelled and original heading. Headings are expressed in degrees clockwise from North. This function returns null when no solution is available.
     * @param to {ILatLng} The destination LatLng.
     * @param distance {number} The distance travelled, in meters.
     * @param heading {number} The heading in degrees clockwise from north.
     * @return {LatLng}
     */
    static computeOffsetOrigin(to: ILatLng, distance: number, heading: number): LatLng;
    /**
     * Returns the length of the given path.
     * @param path {Array<ILatLng> | BaseArrayClass<ILatLng>}
     * @return {number}
     */
    static computeLength(path: Array<ILatLng> | BaseArrayClass<ILatLng>): number;
    /**
     * Returns the area of a closed path. The computed area uses the same units as the radius.
     * @param path {Array<ILatLng> | BaseArrayClass<ILatLng>}.
     * @return {number}
     */
    static computeArea(path: Array<ILatLng> | BaseArrayClass<ILatLng>): number;
    /**
     * Returns the signed area of a closed path. The signed area may be used to determine the orientation of the path.
     * @param path {Array<ILatLng> | BaseArrayClass<ILatLng>}.
     * @return {number}
     */
    static computeSignedArea(path: Array<ILatLng> | BaseArrayClass<ILatLng>): number;
    /**
     * Returns the heading from one LatLng to another LatLng. Headings are expressed in degrees clockwise from North within the range (-180,180).
     * @param from {ILatLng}
     * @param to {ILatLng}
     * @return {number}
     */
    static computeHeading(from: ILatLng, to: ILatLng): number;
    /**
     * Returns the LatLng which lies the given fraction of the way between the origin LatLng and the destination LatLng.
     * @param from {ILatLng}     The LatLng from which to start.
     * @param to {ILatLng}       The LatLng toward which to travel.
     * @param fraction {number}  A fraction of the distance to travel from 0.0 to 1.0 .
     * @return {LatLng}
     */
    static interpolate(from: ILatLng, to: ILatLng, fraction: number): LatLng;
}
/**
 * @hidden
 */
export declare class GoogleMap extends BaseClass {
    constructor(element: string | HTMLElement, options?: GoogleMapOptions);
    /**
     * Changes the map div
     * @param domNode {HTMLElement | string} [options] If you want to display the map in an html element, you need to specify an element or id. If omit this argument, the map is detached from webview.
     */
    setDiv(domNode?: HTMLElement | string): void;
    /**
     * Returns the map HTML element
     * @return {HTMLElement}
     */
    getDiv(): HTMLElement;
    /**
     * Changes the map type id
     * @param mapTypeId {string}
     */
    setMapTypeId(mapTypeId: MapType): void;
    /**
     * Moves the camera with animation
     * @return {Promise<any>}
     */
    animateCamera(cameraPosition: CameraPosition<any>): Promise<any>;
    /**
     * Zooming in the camera with animation
     * @return {Promise<any>}
     */
    animateCameraZoomIn(): Promise<any>;
    /**
     * Zooming out the camera with animation
     * @return {Promise<any>}
     */
    animateCameraZoomOut(): Promise<any>;
    /**
     * Moves the camera without animation
     * @return {Promise<any>}
     */
    moveCamera(cameraPosition: CameraPosition<any>): Promise<any>;
    /**
     * Zooming in the camera without animation
     * @return {Promise<any>}
     */
    moveCameraZoomIn(): Promise<any>;
    /**
     * Zooming out the camera without animation
     * @return {Promise<any>}
     */
    moveCameraZoomOut(): Promise<any>;
    /**
     * Get the position of the camera.
     * @return {CameraPosition}
     */
    getCameraPosition(): CameraPosition<ILatLng>;
    /**
     * Get the current camera target position
     * @return {Promise<CameraPosition>}
     */
    getCameraTarget(): ILatLng;
    /**
     * Get the current camera zoom level
     * @return {number}
     */
    getCameraZoom(): number;
    /**
     * Get the current camera bearing
     * @return {number}
     */
    getCameraBearing(): number;
    /**
     * Get the current camera tilt (view angle)
     * @return {number}
     */
    getCameraTilt(): number;
    /**
     * Set the center position of the camera view
     * @param latLng {ILatLng | Array<ILatLng>}
     */
    setCameraTarget(latLng: ILatLng | Array<ILatLng>): void;
    /**
     * Set zoom level of the camera
     * @param zoomLevel {number} Zoom level
     */
    setCameraZoom(zoomLevel: number): void;
    /**
     * Set the camera view angle
     * @param tiltLevel {number} Tilt level
     */
    setCameraTilt(tiltLevel: number): void;
    /**
     * Set camera bearing
     * @param bearing {any}
     */
    setCameraBearing(bearing: any): void;
    /**
     * Change the center of the map by the given distance in pixels
     * @param x {any}
     * @param y {any}
     */
    panBy(x: string | number, y: string | number): void;
    /**
     * Get the current visible region (southWest and northEast)
     * @return {VisibleRegion}
     */
    getVisibleRegion(): VisibleRegion;
    /**
     * Get the current device location
     * @return {Promise<MyLocation>}
     */
    getMyLocation(options?: MyLocationOptions): Promise<MyLocation>;
    /**
     * Set false to ignore all clicks on the map
     * @param isClickable {boolean}
     */
    setClickable(isClickable: boolean): void;
    /**
     * Destroy a map completely
     * @return {Promise<any>}
     */
    remove(): Promise<any>;
    /**
     * Remove all overlays, such as marker
     * @return {Promise<any>}
     */
    clear(): Promise<any>;
    /**
     * Convert the unit from LatLng to the pixels from the left/top of the map div
     * @return {Promise<any>}
     */
    fromLatLngToPoint(latLng: ILatLng): Promise<any[]>;
    /**
     * Convert the unit from the pixels from the left/top to the LatLng
     * @return {Promise<LatLng>}
     */
    fromPointToLatLng(point: any): Promise<LatLng>;
    /**
     * Set true if you want to show the MyLocation control (blue dot)
     * @param enabled {boolean}
     */
    setMyLocationEnabled(enabled: boolean): void;
    /**
     * Set true if you want to show the MyLocation button
     * @param enabled {boolean}
     */
    setMyLocationButtonEnabled(enabled: boolean): void;
    /**
     * Get the currently focused building
     * @return {Promise<any>}
     */
    getFocusedBuilding(): Promise<any>;
    /**
     * Set true if you want to show the indoor map
     * @param enabled {boolean}
     */
    setIndoorEnabled(enabled: boolean): void;
    /**
     * Set true if you want to show the traffic layer
     * @param enabled {boolean}
     */
    setTrafficEnabled(enabled: boolean): void;
    /**
     * Set true if you want to show the compass button
     * @param enabled {boolean}
     */
    setCompassEnabled(enabled: boolean): void;
    /**
     * Sets the preference for whether all gestures should be enabled or disabled
     * @param enabled {boolean}
     */
    setAllGesturesEnabled(enabled: boolean): void;
    /**
     * Set visibility of the map
     * @param visible {boolean}
     */
    setVisible(visible: boolean): void;
    /**
     * Adjust the map padding (same as CSS padding rule)
     * @param top {number}
     * @param right {number}
     * @param left {number}
     * @param bottom {number}
     */
    setPadding(top?: number, right?: number, bottom?: number, left?: number): void;
    /**
     * Set options
     * @param options
     */
    setOptions(options: GoogleMapOptions): void;
    /**
     * Adds a marker
     * @param options {MarkerOptions} options
     * @return {Promise<Marker | any>}
     */
    addMarker(options: MarkerOptions): Promise<Marker | any>;
    /**
     * Adds a marker cluster
     * @param options {MarkerClusterOptions} options
     * @return {Promise<MarkerCluster | any>}
     */
    addMarkerCluster(options: MarkerClusterOptions): Promise<MarkerCluster | any>;
    /**
     * Adds a circle
     * @param options {CircleOptions} options
     * @return {Promise<Circle | any>}
     */
    addCircle(options: CircleOptions): Promise<Circle | any>;
    /**
     * Adds a polygon
     * @param options {PolygonOptions} options
     * @return {Promise<Polygon | any>}
     */
    addPolygon(options: PolygonOptions): Promise<Polygon | any>;
    /**
     * Adds a polyline
     * @param options {PolylineOptions} options
     * @return {Promise<Polyline | any>}
     */
    addPolyline(options: PolylineOptions): Promise<Polyline | any>;
    /**
     * Adds a tile overlay
     * @param options {TileOverlayOptions} options
     * @return {Promise<TileOverlay | any>}
     */
    addTileOverlay(options: TileOverlayOptions): Promise<TileOverlay | any>;
    /**
     * Adds a ground overlay
     * @param options {GroundOverlayOptions} options
     * @return {Promise<GroundOverlay | any>}
     */
    addGroundOverlay(options: GroundOverlayOptions): Promise<GroundOverlay | any>;
    /**
     * Adds a kml overlay
     * @param options {KmlOverlayOptions} options
     * @return {Promise<KmlOverlay | any>}
     */
    addKmlOverlay(options: KmlOverlayOptions): Promise<KmlOverlay | any>;
    /**
     * Returns the base64 encoded screen capture of the map.
     * @param options {ToDataUrlOptions} [options] options
     * @return {Promise<string>}
     */
    toDataURL(params?: ToDataUrlOptions): Promise<string>;
}
/**
 * @hidden
 */
export declare class GroundOverlay extends BaseClass {
    private _map;
    constructor(_map: GoogleMap, _objectInstance: any);
    /**
     * Return the ID of instance.
     * @return {string}
     */
    getId(): string;
    /**
     * Return the map instance.
     * @return {GoogleMap}
     */
    getMap(): GoogleMap;
    /**
     * Change the bounds of the GroundOverlay
     * @param bounds { ILatLng[]}
     */
    setBounds(bounds: ILatLng[]): void;
    /**
     * Change the bearing of the ground overlay
     * @param bearing {number}
     */
    setBearing(bearing: number): void;
    /**
     * Return the current bearing value
     */
    getBearing(): number;
    /**
     * Change the image of the ground overlay
     * @param image {string} URL of image
     */
    setImage(image: string): void;
    /**
     * Change the opacity of the ground overlay from 0.0 to 1.0
     * @param opacity {number}
     */
    setOpacity(opacity: number): void;
    /**
     * Return the current opacity
     * @return {number}
     */
    getOpacity(): number;
    /**
     * Change clickablity of the ground overlay
     * @param clickable {boolean}
     */
    setClickable(clickable: boolean): void;
    /**
     * Return true if the ground overlay is clickable
     * @return {boolean}
     */
    getClickable(): boolean;
    /**
     * Change visibility of the ground overlay
     * @param visible {boolean}
     */
    setVisible(visible: boolean): void;
    /**
     * Return true if the ground overlay is visible
     * @return {boolean}
     */
    getVisible(): boolean;
    /**
     * Change the ground overlay zIndex order
     * @param index {number}
     */
    setZIndex(index: number): void;
    /**
     * Return the current ground overlay zIndex
     * @return {number}
     */
    getZIndex(): number;
    /**
     * Remove the ground overlay
     */
    remove(): void;
}
/**
 * @hidden
 */
export declare class HtmlInfoWindow extends BaseClass {
    constructor();
    /**
     * Change the backgroundColor
     * @param color {string}
     */
    setBackgroundColor(color: string): void;
    /**
     * Set your HTML contents.
     * @param content {any} String containing text or HTML element
     * @param cssOptions? {any} CSS styles for the container element of HTMLInfoWindow
     */
    setContent(content: string | Element, cssOptions?: any): void;
    /**
     * Open the htmlInfoWindow
     * @param marker {Marker}
     */
    open(marker: any): any;
    /**
     * Close the htmlInfoWindow
     */
    close(): void;
}
/**
 * @hidden
 */
export declare class Marker extends BaseClass {
    private _map;
    constructor(_map: GoogleMap, _objectInstance: any);
    /**
     * Return the ID of instance.
     * @return {string}
     */
    getId(): string;
    /**
     * Return the map instance.
     * @return {GoogleMap}
     */
    getMap(): GoogleMap;
    /**
     * Set the marker position.
     * @param latLng {ILatLng}
     */
    setPosition(latLng: ILatLng): void;
    /**
     * Return the marker position.
     * @return {ILatLng}
     */
    getPosition(): ILatLng;
    /**
     * Show the normal infoWindow of the marker.
     */
    showInfoWindow(): void;
    /**
     * Hide the normal infoWindow of the marker.
     */
    hideInfoWindow(): void;
    /**
     * Specify the animation either `DROP` or `BOUNCE`
     * @param animation {string}
     */
    setAnimation(animation: string): void;
    /**
     * Set true if you **do not want** to move the map when you click on the marker.
     * @param disableAutoPan {boolean}
     */
    setDisableAutoPan(disableAutoPan: boolean): void;
    /**
     * Set false if you want to hide the marker.
     * @param visible
     */
    setVisible(visible: boolean): void;
    /**
     * Return true if the marker is visible
     */
    isVisible(): boolean;
    /**
     * Change title of the normal infoWindow.
     * @param title {string}
     */
    setTitle(title: string): void;
    /**
     * Return the title strings.
     * @return {string}
     */
    getTitle(): string;
    /**
     * Change snippet of the normal infoWindow.
     * @param snippet {string}
     */
    setSnippet(snippet: string): void;
    /**
     * Return the snippet strings.
     * @return {string}
     */
    getSnippet(): string;
    /**
     * Change the marker opacity from 0.0 to 1.0.
     * @param alpha {number} Opacity
     */
    setOpacity(alpha: number): void;
    /**
     * Return the marker opacity.
     * @return {number} Opacity
     */
    getOpacity(): number;
    /**
     * Remove the marker.
     */
    remove(): void;
    /**
     * Change the info window anchor. This defaults to 50% from the left of the image and at the bottom of the image.
     * @param x {number} Distance from left of the icon image in pixels.
     * @param y {number} Distance from top of the icon image in pixels.
     */
    setIconAnchor(x: number, y: number): void;
    /**
     * Change the info window anchor. This defaults to 50% from the left of the image and at the top of the image.
     * @param x {number} Distance from left of the icon image in pixels.
     * @param y {number} Distance from top of the icon image in pixels.
     */
    setInfoWindowAnchor(x: number, y: number): void;
    /**
     * Return true if the infoWindow is shown on the marker
     * @return {boolean}
     */
    isInfoWindowShown(): boolean;
    /**
     * Return the marker hash code.
     * @return {string} Marker hash code
     */
    getHashCode(): string;
    /**
     * Higher zIndex value overlays will be drawn on top of lower zIndex value tile layers and overlays.
     * @param y {number} z-index
     */
    setZIndex(zIndex: number): void;
    /**
     * Get z-index
     * @return {number}
     */
    getZIndex(): number;
    /**
     * Set true if you allow all users to drag the marker.
     * @param draggable {boolean}
     */
    setDraggable(draggable: boolean): void;
    /**
     * Return true if the marker drag is enabled.
     * @return {boolean}
     */
    isDraggable(): boolean;
    /**
     * Set true if you want to be flat marker.
     * @param flat {boolean}
     */
    setFlat(flat: boolean): void;
    /**
     * Change icon url and/or size
     * @param icon
     */
    setIcon(icon: MarkerIcon): void;
    /**
     * Set the marker rotation angle.
     * @param rotation {number}
     */
    setRotation(rotation: number): void;
    /**
     * Return the marker rotation angle.
     * @return {number}
     */
    getRotation(): number;
}
/**
 * @hidden
 */
export declare class MarkerCluster extends BaseClass {
    private _map;
    constructor(_map: GoogleMap, _objectInstance: any);
    /**
     * Return the ID of instance.
     * @return {string}
     */
    getId(): string;
    /**
     * Add one marker location
     * @param marker {MarkerOptions} one location
     * @param skipRedraw? {boolean} marker cluster does not redraw the marker cluster if true.
     */
    addMarker(marker: MarkerOptions, skipRedraw?: boolean): void;
    /**
     * Add marker locations
     * @param markers {MarkerOptions[]} multiple locations
     */
    addMarkers(markers: MarkerOptions[]): void;
    /**
     * Remove the marker cluster
     */
    remove(): void;
    /**
     * Return the map instance.
     * @return {GoogleMap}
     */
    getMap(): GoogleMap;
}
/**
 * @hidden
 */
export declare class Polygon extends BaseClass {
    private _map;
    constructor(_map: GoogleMap, _objectInstance: any);
    /**
     * Return the ID of instance.
     * @return {string}
     */
    getId(): string;
    /**
     * Return the map instance.
     * @return {GoogleMap}
     */
    getMap(): GoogleMap;
    /**
     * Change the polygon points.
     * @param points {ILatLng[]}
     */
    setPoints(points: ILatLng[]): void;
    /**
     * Return an instance of the BaseArrayClass.
     * You can modify the points.
     * @return {BaseArrayClass<ILatLng>}
     */
    getPoints(): BaseArrayClass<ILatLng>;
    /**
     * Change the polygon holes.
     * @param holes {ILatLng[][]}
     */
    setHoles(holes: ILatLng[][]): void;
    /**
     * Return an instance of the BaseArrayClass.
     * You can modify the holes.
     * @return {BaseArrayClass<ILatLng[]>}
     */
    getHoles(): BaseArrayClass<ILatLng[]>;
    /**
     * Change the filling color (inner color)
     * @param fillColor {string}
     */
    setFillColor(fillColor: string): void;
    /**
     * Return the current polygon filling color (inner color).
     * @return {string}
     */
    getFillColor(): string;
    /**
     * Change the stroke color (outer color)
     * @param strokeColor {string}
     */
    setStrokeColor(strokeColor: string): void;
    /**
     * Return the current polygon stroke color (outer color)
     * @return {string}
     */
    getStrokeColor(): string;
    /**
     * Change clickablity of the polygon
     * @param clickable {boolean}
     */
    setClickable(clickable: boolean): void;
    /**
     * Return true if the polygon is clickable
     */
    getClickable(): boolean;
    /**
     * Change visibility of the polygon
     * @param visible {boolean}
     */
    setVisible(visible: boolean): void;
    /**
     * Return true if the polygon is visible
     * @return {boolean}
     */
    getVisible(): boolean;
    /**
     * Change the polygon zIndex order.
     * @param zIndex {number}
     */
    setZIndex(zIndex: number): void;
    /**
     * Return the current polygon zIndex
     * @return {number}
     */
    getZIndex(): number;
    /**
     * Remove the polygon.
     */
    remove(): void;
    /**
     * Change the polygon stroke width
     */
    setStrokeWidth(strokeWidth: number): void;
    /**
     * Return the polygon stroke width
     */
    getStrokeWidth(): number;
    /**
     * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of the Earth.
     * @param geodesic {boolean}
     */
    setGeodesic(geodesic: boolean): void;
    /**
     * Return true if the polygon is geodesic.
     * @return {boolean}
     */
    getGeodesic(): boolean;
}
/**
 * @hidden
 */
export declare class Polyline extends BaseClass {
    private _map;
    constructor(_map: GoogleMap, _objectInstance: any);
    /**
     * Return the ID of instance.
     * @return {string}
     */
    getId(): string;
    /**
     * Return the map instance.
     * @return {GoogleMap}
     */
    getMap(): GoogleMap;
    /**
     * Change the polyline points.
     * @param points {ILatLng[]}
     */
    setPoints(points: ILatLng[]): void;
    /**
     * Return an instance of the BaseArrayClass
     * You can modify the points.
     * @return {BaseArrayClass<ILatLng>}
     */
    getPoints(): BaseArrayClass<ILatLng>;
    /**
     * When true, edges of the polyline are interpreted as geodesic and will follow the curvature of the Earth.
     * @param geoDesic {boolean}
     */
    setGeoDesic(geoDesic: boolean): void;
    /**
     * Return true if the polyline is geodesic
     */
    getGeodesic(): boolean;
    /**
     * Change visibility of the polyline
     * @param visible {boolean}
     */
    setVisible(visible: boolean): void;
    /**
     * Return true if the polyline is visible
     * @return {boolean}
     */
    getVisible(): boolean;
    /**
     * Change clickablity of the polyline
     * @param clickable {boolean}
     */
    setClickable(clickable: boolean): void;
    /**
     * Return true if the polyline is clickable
     * @return {boolean}
     */
    getClickable(): boolean;
    /**
     * Change the polyline color
     * @param strokeColor {string}
     */
    setStrokeColor(strokeColor: string): void;
    /**
     * Return the current polyline color
     * @return {string}
     */
    getStrokeColor(): string;
    /**
     * Change the polyline stroke width
     * @param strokeWidth {number}
     */
    setStrokeWidth(strokeWidth: number): void;
    /**
     * Return the current stroke width (unit: pixel).
     * @return {number}
     */
    getStrokeWidth(): number;
    /**
     * Change the polyline zIndex order.
     * @param index {number}
     */
    setZIndex(index: number): void;
    /**
     * Return the current polyline zIndex
     * @return {number}
     */
    getZIndex(): number;
    /**
     * Remove the polyline
     */
    remove(): void;
}
/**
 * @hidden
 */
export declare class TileOverlay extends BaseClass {
    private _map;
    constructor(_map: GoogleMap, _objectInstance: any);
    /**
     * Return the ID of instance.
     * @return {string}
     */
    getId(): string;
    /**
     * Return the map instance.
     * @return {GoogleMap}
     */
    getMap(): GoogleMap;
    /**
     * Set whether the tiles should fade in.
     * @param fadeIn {boolean}
     */
    setFadeIn(fadeIn: boolean): void;
    /**
     * Get whether the tiles should fade in
     * @return {boolean}
     */
    getFadeIn(): boolean;
    /**
     * Set the zIndex of the tile overlay
     * @param zIndex {number}
     */
    setZIndex(zIndex: number): void;
    /**
     * Return the zIndex of the tile overlay
     * @return {number}
     */
    getZIndex(): number;
    /**
     * Set the opacity of the tile overlay
     * @param opacity {number}
     */
    setOpacity(opacity: number): void;
    /**
     * Return the opacity of the tile overlay
     * @return {number}
     */
    getOpacity(): number;
    /**
     * Set false if you want to hide
     * @param visible {boolean}
     */
    setVisible(visible: boolean): void;
    /**
     * Return true if the tile overlay is visible
     * @return {boolean}
     */
    getVisible(): boolean;
    /**
     * Get tile size
     */
    getTileSize(): any;
    /**
     * Remove the tile overlay
     */
    remove(): void;
}
/**
 * @hidden
 */
export declare class KmlOverlay extends BaseClass {
    private _map;
    constructor(_map: GoogleMap, _objectInstance: any);
    /**
     * Returns the viewport to contains all overlays
     */
    getDefaultViewport(): CameraPosition<ILatLng | ILatLng[]>;
    /**
     * Return the ID of instance.
     * @return {string}
     */
    getId(): string;
    /**
     * Return the map instance.
     * @return {GoogleMap}
     */
    getMap(): GoogleMap;
    /**
     * Change visibility of the polyline
     * @param visible {boolean}
     */
    setVisible(visible: boolean): void;
    /**
     * Return true if the polyline is visible
     * @return {boolean}
     */
    getVisible(): boolean;
    /**
     * Change clickablity of the KmlOverlay
     * @param clickable {boolean}
     */
    setClickable(clickable: boolean): void;
    /**
     * Return true if the KmlOverlay is clickable
     * @return {boolean}
     */
    getClickable(): boolean;
    /**
     * Remove the KmlOverlay
     */
    remove(): void;
}
