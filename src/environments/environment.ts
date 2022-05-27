// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherApiBaseUrl: 'https://community-open-weather-map.p.rapidapi.com/weather',
  XRapidAPIHostHeaderName: 'X-RapidAPI-Host',
  XRapidAPIHostHeaderValue: 'community-open-weather-map.p.rapidapi.com',
  XRapidAPIKeyHeaderName:   'X-RapidAPI-Key',
  XRapidAPIKeyHeaderValue: 'a6d3d2682dmsh82cb56a8d383d38p1306c3jsnf0bfdf07006b'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
