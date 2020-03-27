'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "55660001be04c5fcba1e20846d8a89b1",
"/assets/assets/fonts/Signatra.ttf": "7b67035b3b8dab514ecf09763597a947",
"/assets/assets/images/activity_feed.svg": "6acda1cfe2383d587fed639acdb115f1",
"/assets/assets/images/google_signin_button.png": "f3967439c8015d0ff28b5bc3d542e793",
"/assets/assets/images/no_content.svg": "cbc8724a992b15ec4f477b412ec14120",
"/assets/assets/images/search.svg": "4c2ea409128ab6a08075ddc6305dfa63",
"/assets/assets/images/upload.svg": "546e50f50a81fbd16e384b8deafe11c7",
"/assets/FontManifest.json": "5cfde40c387b82e91c023304c9d6861a",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "2c6bd5071de9692580f83874c0e10414",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "47a6fdc0ff9e69435349ee53777d7705",
"/main.dart.js": "757103701880ce72d69d1229963291af",
"/manifest.json": "e13e546ad7bcf94217274c5988c5d83b"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
