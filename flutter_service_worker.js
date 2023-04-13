'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a4e0f3f07da61104c6cf4c2f0d90687b",
"assets/assets/almanya.jpg": "5fc19420960190c09ad117d550bbd7a4",
"assets/assets/anc.png": "1f1c868dea15a3dccddc6c618ebe66d8",
"assets/assets/b1.png": "b32040e70f755fbca166e59d174aae11",
"assets/assets/ba1.jpg": "932360489369d938456c7c29dc195679",
"assets/assets/barca.png": "d1af3e40ba9ac0b70bcb9d48aef46d55",
"assets/assets/barca1.jpg": "45a5e9eb3a0f69a5f83def59b14dc62f",
"assets/assets/barca11.jpg": "fccf3f3e54b12dccc29fd7e65f4e6b39",
"assets/assets/barcawalp.jpg": "bf36e3dbd24d3d2d4e063e61347fe2b6",
"assets/assets/bayern.png": "ad8f3310581b4334cf5938ec883e51db",
"assets/assets/bayern1.jpg": "7abf2f96dd1f2245815e332ccd38fc53",
"assets/assets/bayernwalp.jpg": "4fa1a59e32c9076c401c8c931e892596",
"assets/assets/bundesligaa.png": "22045f912dc4e90420ae1160add0151b",
"assets/assets/bwalp.jpg": "ff162513d579b2a6ecce94af22f7521d",
"assets/assets/c11.jpg": "70000802f1e63957f36bbf0a7cc4e1df",
"assets/assets/city1.png": "e1c059434ecaec09e6e57a954afec108",
"assets/assets/city12.jpg": "20a87c508b148c094dc95021fc6fae94",
"assets/assets/city13.jpg": "2abfcd864e4a6512228b73eb29715041",
"assets/assets/d1.jpg": "ab389c714cc67a73d4fedf9578be5972",
"assets/assets/d2.jpeg": "f48c3a09b94fc01d69c9af513f5d439d",
"assets/assets/dormund.png": "31d18557a75da68b213b707cf807fb2c",
"assets/assets/fb.png": "0da2685b1008889f6a7644c448030c2b",
"assets/assets/fb1.jpg": "dcc3c4985f799c21852c6c4d22531ab6",
"assets/assets/fbwalpp.jpg": "962757e37db6e11405e1e99be4958cd4",
"assets/assets/fbyeri.jpg": "c5eeaf6916d852a16123f62d24fe422a",
"assets/assets/gs.png": "a52f5ba052977369a1318aa36f9a9951",
"assets/assets/gs11.jpg": "aef88b2536755fa1b50edc63b91a90ee",
"assets/assets/gsresim.jpg": "ec75a99a8db0118103ff89d464322b5f",
"assets/assets/gstaraftar.jpg": "cd8309a1cc72b46cf366f202debcadc8",
"assets/assets/gswalp.jpg": "3d9eceee4ac3e39cfab087507142884b",
"assets/assets/gsyeri.jpg": "2945f3ce6e2b77dacd888b18c71aa930",
"assets/assets/ingiltere.jpg": "efcd7b9f079e608a3441ccf0e7cbc806",
"assets/assets/ispanya.jpg": "8471daadbae3002fd0b430f6f55e80bb",
"assets/assets/italya.jpg": "57b2c9699725d17eee0a8483703b9afb",
"assets/assets/laliga.png": "6a874add76c3d448fbac5a33d70a6915",
"assets/assets/m1.jpg": "27cbdba11d52a37eb260825d7a3f954a",
"assets/assets/m2.jpg": "abc496e55a150876d66e976c704b101b",
"assets/assets/manu.png": "aaa70615902fea5ce3045ed5151f2764",
"assets/assets/manu1.jpg": "279d0f2fb1b362b4f73dbaf4d8a54003",
"assets/assets/manu11.jpg": "5b14065d6d51de99f23a261ea0173f00",
"assets/assets/manu12.jpg": "cfc1c3573797ded1ca55554b00c0c1ba",
"assets/assets/messi.jpeg": "4b9dbc467ab491411e225688ef57ec7d",
"assets/assets/milanwalp.jpg": "c1529a7aefb423daa58a4c679da31b83",
"assets/assets/n1.jpg": "863e07bc981a3299af9d9544045afdb9",
"assets/assets/napolii.png": "877cfe9d5b2d5a77462ee3bb7e751abc",
"assets/assets/napoliwalp.jpg": "a65556a3de7338cbd8e433022aa406c3",
"assets/assets/np1.jpeg": "f313eeb70f720d869ce5c28c793bcf3b",
"assets/assets/premier.png": "47b847d4b95a1b8959bb9bfaa5be5a01",
"assets/assets/prm.png": "4a04a35044a144482005738c8f43a935",
"assets/assets/prmr.png": "c5e9b648bf36587a0952165253d4c43b",
"assets/assets/r1.jpg": "19a97df8ae45b6c85a5becdc5b66abfa",
"assets/assets/real1.jpg": "d4121b9a8edd9428cd48e8f3df0d040b",
"assets/assets/realmadrid.png": "48e374e9587b005fe947d932ff3e12f9",
"assets/assets/realwalp.jpg": "2c93f267c19ee8008ff6753b6a36c6d5",
"assets/assets/s%25C3%25BCperlig.png": "fe3de46a5c6b95a29c4d000e7b095b56",
"assets/assets/seriea.png": "4c0de94eb3bf2d1a5078e4a6553f1aaa",
"assets/assets/t%25C3%25BCrkiyewalp.jpg": "3650a5cd382c51de627123309932f160",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "839e703bbe8179d21e212945602a5f66",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f6deba291609a497c864b9fa6b006354",
"/": "f6deba291609a497c864b9fa6b006354",
"main.dart.js": "eba7612a526528fef32cc690306c75c5",
"manifest.json": "8d5e3042afaaf6039908fc4c6b0fc252",
"version.json": "87284dca3d9f3f1e49ca8385395566a4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
