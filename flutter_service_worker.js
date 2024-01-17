'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "4af2b91eb221b73845365e1302528f07",
"manifest.json": "4d97732c9b5561105822bbfeff0d65ef",
"index.html": "c91c3d912e9d8149a18c0acf5d8b4d16",
"/": "c91c3d912e9d8149a18c0acf5d8b4d16",
"assets/AssetManifest.bin": "fd9bd4e2d0763cdbce3bfe13153bcf04",
"assets/fonts/MaterialIcons-Regular.otf": "9a0c2bab05ad1e8602544a9d23200091",
"assets/assets/images/youngwoojiyeon14.jpeg": "f27bb25de1ff56e10917271701c0bb36",
"assets/assets/images/youngwoojiyeon13.jpeg": "af99c9484a7471dc6356fd521e4a07ae",
"assets/assets/images/youngwoojiyeon2.jpeg": "5e8ab2e85a3945f0bf2e69db5efeeefd",
"assets/assets/images/youngwoojiyeon23.jpeg": "f6c17e557ed476b2270f84b6f74ecd4e",
"assets/assets/images/youngwoojiyeon25.jpeg": "51362360aecd47271152e6188decac57",
"assets/assets/images/youngwoojiyeon15.jpeg": "af92c13559a278ec3979e6e8ae140325",
"assets/assets/images/youngwoojiyeon10.jpeg": "fb4de70903bf1e601eb61ec81a18893f",
"assets/assets/images/youngwoojiyeon9.jpeg": "e26d503f97e85b931d908f1a18153135",
"assets/assets/images/youngwoojiyeon21.jpeg": "7b27c1a749bbb7588b30b99e22a4c209",
"assets/assets/images/youngwoojiyeon26.jpeg": "0b680be019219293ba89e8f36c6c93dc",
"assets/assets/images/youngwoojiyeon6.jpeg": "0d34afd985f4d897c5752ca569853b42",
"assets/assets/images/youngwoojiyeon3.jpeg": "e46d1b437d080240957ad70dd6040875",
"assets/assets/images/youngwoojiyeon7.jpeg": "44d5f941d36116f4e43c774148434799",
"assets/assets/images/youngwoojiyeon11.jpeg": "d9c8512c531eda085e832c5a008a4c54",
"assets/assets/images/youngwoojiyeon20.jpeg": "c4748757566707719f9e5ba513a50476",
"assets/assets/images/banner.png": "e07e18f929edd154021fb3112e31785a",
"assets/assets/images/youngwoojiyeon27.jpeg": "4ff067d175b5a214d0cdaffae53cd732",
"assets/assets/images/youngwoojiyeon22.jpeg": "56b97b70c940d5ab4893c337951ac79e",
"assets/assets/images/youngwoojiyeon28.jpeg": "7c8bf2b49bd57d92ed227b10d38bcf24",
"assets/assets/images/youngwoojiyeon4.jpeg": "6d469ce74270e18cc19ce0b90d02d958",
"assets/assets/images/youngwoojiyeon24.jpeg": "68977ef1805f0d8d39018704739e78f9",
"assets/assets/images/youngwoojiyeon12.jpeg": "ee204f504f6c053699f9f7b0236185d2",
"assets/assets/images/youngwoojiyeon31.jpeg": "bbdae635fae09fce47e472d06981fa38",
"assets/assets/images/youngwoojiyeon16.jpeg": "5adf69bb55ebb93c64f70dcf2fb5727f",
"assets/assets/images/youngwoojiyeon17.jpeg": "50196a78d21a9319f4fce98d018891c5",
"assets/assets/images/youngwoojiyeon5.jpeg": "8d9387f175589f985b8a8a58635bfa2d",
"assets/assets/images/heart.png": "4944eb1519561e811b6cb1a93f01781a",
"assets/assets/images/youngwoojiyeon18.jpeg": "03c15bf3a708cffd99eb89b3218545f5",
"assets/assets/images/youngwoojiyeon19.jpeg": "6d991b772e6c402d76466b15000bbeb5",
"assets/assets/images/youngwoojiyeon8.jpeg": "9b2f96183f8455f4a3dff3f067e7da17",
"assets/assets/images/youngwoojiyeon30.jpeg": "cd0740943e234d3c05bea00d8e79d152",
"assets/assets/images/youngwoojiyeon1.jpeg": "a3990c855eb85fd868cdecac2b028768",
"assets/assets/images/youngwoojiyeon29.jpeg": "10d27b5dabd708528dca7ada35be38ac",
"assets/assets/images/couple.png": "7959f9e07bfa07b90e0a484387a43d7f",
"assets/assets/images/thankYou.png": "02a4926a8d798b5f5e1d09c7dd8d232b",
"assets/assets/fonts/default_font_light.otf": "b9a9b17bad54e784897bdcbdb1d3d92d",
"assets/assets/fonts/default_font_bold.otf": "94da6e2e519d87056591f7867cff87f4",
"assets/AssetManifest.bin.json": "04242ef1f73177beb27c141fff98e243",
"assets/FontManifest.json": "e5196614c757c63f1eca7855d72ffbd3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "ebbe3b8dde981297d37a31117b95c11c",
"assets/AssetManifest.json": "68a980f5781b76f433d16cfa9c5d48bb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "6a78f6695bdefbdfd443d6cfb85d9ef3",
"version.json": "7c18fd15f9dcbc01f3157e79e13f9d68",
"canvaskit/canvaskit.wasm": "dce026672c583772838e4d2e1628f255",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.wasm": "721dc41c7f0b803182f1ab5b860ad6e5",
"canvaskit/canvaskit.js.symbols": "630c0246bfae8c28f2b50e7ae3d964d5",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/chromium/canvaskit.wasm": "c6d9da7c7123272fbd22bc0fcaa2ad4f",
"canvaskit/chromium/canvaskit.js.symbols": "14b500e4ddcb3c5f46d1af587d15165b",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/skwasm.js.symbols": "7e15fdd687fd9b4bf57b5e626c3ebddb",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
