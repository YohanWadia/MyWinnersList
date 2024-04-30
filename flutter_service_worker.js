'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "da3548f0f9161a10f00e0a201e6e2462",
"assets/AssetManifest.bin.json": "b0d4f19c5727d493a6550d4575562fb3",
"assets/AssetManifest.json": "5fbb0e7fca264de403a5814a2a83fe0e",
"assets/assets/fonts/Mitr-Regular.ttf": "3a0a53c9bb100679336663c17f4b298c",
"assets/assets/images/flag-of-Albania.png": "2317f34397a0d48a6c4550a8a36e145a",
"assets/assets/images/flag-of-Armenia.png": "43aaca4b9541f1d49474dd93bc8ff1cd",
"assets/assets/images/flag-of-Australia.png": "9a32b9bf5c61a757b749e37e2b45e374",
"assets/assets/images/flag-of-Austria.png": "ce4769d3d3345d885fd6c9d09dc76956",
"assets/assets/images/flag-of-Azerbaijan.png": "c1a212cd3911fdc024734da6ed4fa6b1",
"assets/assets/images/flag-of-Belgium.png": "4fdeb8c30dc97b992fe90fcaa9c1decf",
"assets/assets/images/flag-of-Croatia.png": "c7591faefd0e0caf26d5e0946bce8284",
"assets/assets/images/flag-of-Cyprus.png": "c49d3c7284232e1f611342500f065cfa",
"assets/assets/images/flag-of-Czechia.png": "792b3e541325e3f4aca1148688772d7f",
"assets/assets/images/flag-of-Denmark.png": "5a7194b85a652c51c363043622f1ec1c",
"assets/assets/images/flag-of-Estonia.png": "f35593521514394a807ac20959595adc",
"assets/assets/images/flag-of-Finland.png": "552144db8ac1b97c4af0beddd449dc1e",
"assets/assets/images/flag-of-France.png": "78b7459646dbf97fe1d634696ec42f16",
"assets/assets/images/flag-of-Georgia.png": "29dd6a8bd33c9965af8f14712604fe9e",
"assets/assets/images/flag-of-Germany.png": "b4e8324d0c4acd1cc2c490d9262e31e6",
"assets/assets/images/flag-of-Greece.png": "c4c97f5d3ce6698642fc6d7ed42cfa50",
"assets/assets/images/flag-of-Iceland.png": "9fff659d1097a7f87049409aa53ae22e",
"assets/assets/images/flag-of-Ireland.png": "97d2a7399f8d9645b72fc96e65893e44",
"assets/assets/images/flag-of-Israel.png": "42e77d8dbc221dd2f00e4651117ef1b0",
"assets/assets/images/flag-of-Italy.png": "d351fbd36a4c37029fc16f07b4ceb08f",
"assets/assets/images/flag-of-Latvia.png": "526d41619a626b61a2c9c01abc6458d2",
"assets/assets/images/flag-of-Lithuania.png": "0aa78a5ffa6de77b3c8d9aec55aed04c",
"assets/assets/images/flag-of-Luxembourg.png": "45e16fc2b26028ba203044ebfb3adc5e",
"assets/assets/images/flag-of-Malta.png": "975a0cab650b453aeac0b317d5d0cf8c",
"assets/assets/images/flag-of-Moldova.png": "92484d1db6f3aa5f5fc8c4c1a38ab99e",
"assets/assets/images/flag-of-Netherlands.png": "26767d908dd4940cdf4ce84c8d7e23e4",
"assets/assets/images/flag-of-Norway.png": "ef88a0881fce268a18869e8a0e793239",
"assets/assets/images/flag-of-Poland.png": "f5db8434adaafe7787b5f6bdcf081a93",
"assets/assets/images/flag-of-Portugal.png": "ffd119740657fad762e8d08979e2a73b",
"assets/assets/images/flag-of-San-Marino.png": "1cb7b2bd7c5ce885f1ea30b93486ba60",
"assets/assets/images/flag-of-Serbia.png": "dca5381c26501a8b4c621c7327efb9fc",
"assets/assets/images/flag-of-Slovenia.png": "0f275876dd4399f6564fb74f489272ee",
"assets/assets/images/flag-of-Spain.png": "c4b56912039bc22bf4bcc06c6ec84946",
"assets/assets/images/flag-of-Sweden.png": "ada1db6dafa99787626db053e3921578",
"assets/assets/images/flag-of-Switzerland.png": "f88f357aed1d466b8d3e169b184542bb",
"assets/assets/images/flag-of-Ukraine.png": "a13311ffa780e22f5b965b531b43e4ad",
"assets/assets/images/flag-of-United-Kingdom.png": "cb7b4dd8e9624a512ffde8102fe63005",
"assets/assets/images/forSplash.png": "16ae6f5898a00f2812ea072930d718e2",
"assets/assets/images/forSplashBottom.png": "b7400ab24b102df66b378c9d9a3216fb",
"assets/assets/images/mic.png": "8915bd57705ce6bfb52bafa1e8f5e225",
"assets/assets/images/myicon.png": "119712b5b4c442220955aef6783802b5",
"assets/assets/images/myList.png": "c67c7045eae58c1eacfccfad40359f2d",
"assets/FontManifest.json": "2282555535b28232a5f7c242eed53916",
"assets/fonts/MaterialIcons-Regular.otf": "dca0e0e87eb78ba19b1f02759e1cb5d1",
"assets/NOTICES": "7857094ea3a2c5da745010b0788f6aac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1ff20c767ba05994d8d9b98db03a9f32",
"/": "1ff20c767ba05994d8d9b98db03a9f32",
"main.dart.js": "13247c921dfadddb3d590dc3cff59602",
"manifest.json": "f4286fda76a16b8a1c144e2490f4fd47",
"version.json": "da0ea89684cef2b390adebad68aa15f7"};
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
