importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
workbox.routing.registerRoute(
  /.*custom*\.css/,
  workbox.strategies.networkFirst()
);
workbox.routing.registerRoute(
  /.*\.css/,
  workbox.strategies.cacheFirst({
    cacheName: 'styles',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);
/*workbox.routing.registerRoute(
  /.*custom*\.css/,
  workbox.strategies.networkFirst()
);*/
/*workbox.routing.registerRoute(
  /.*(?<!custom)\.css/,
  workbox.strategies.cacheFirst({
    cacheName: 'styles',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);*/


workbox.routing.registerRoute(
      new RegExp('/libraries/'),
  workbox.strategies.cacheFirst({
    cacheName: 'js-libraries',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);


workbox.routing.registerRoute(
  new RegExp('/font/'),

  workbox.strategies.cacheFirst({
    cacheName: 'fonts',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);
