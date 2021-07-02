// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCBxVQ5xuffvJIxcw18OCC11vjn1-OX0rI',
    authDomain: 'adebriacho.firebaseapp.com',
    databaseURL: 'https://adebriacho.firebaseio.com',
    projectId: 'adebriacho',
    storageBucket: 'adebriacho.appspot.com',
    messagingSenderId: '899810145857',
    appId: '1:899810145857:web:0a2a687cad46ebb03878c0'
  },
  url_graphql: 'https://api-ca-central-1.graphcms.com/v2/ckmmx3zd0r08501z62zp10khq/master'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
