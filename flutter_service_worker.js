'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "46c5680d119f4a17095e13bbe627ca74",
"assets/AssetManifest.bin.json": "e3d76caf0e7153adc7d9288c810b6bdf",
"assets/AssetManifest.json": "11138a52e99d8d37b006853573a65693",
"assets/assets/categories/asian.png": "7951cd016e1f0777cbc8b7c799c8215e",
"assets/assets/categories/burger.png": "a9d285b42139c7172c52f44bb589cf1d",
"assets/assets/categories/coffee.png": "bbea27966117147d39cd1df3f8287aae",
"assets/assets/categories/dessert.png": "6169f408cda6a968e86ac50f8ab0040a",
"assets/assets/categories/fast_food.png": "ca9c137df759a5510631431315ae69ab",
"assets/assets/categories/italian.png": "b5f027b043b1d1cf51c3f1d1ef2a583b",
"assets/assets/categories/mexican.png": "61bf37efd583c373c09b45dbc5884937",
"assets/assets/categories/pizza.png": "a724a519c0bab44af5e25eb5ee2e6066",
"assets/assets/categories/salad.png": "01ad011203a68a5a3aaeefc6e5783eb4",
"assets/assets/categories/seafood.png": "ca516189f59d3f7ad59558fe1cc000c8",
"assets/assets/categories/sushi.png": "aba9112d3e89323c1ad2b6645899d474",
"assets/assets/categories/vegetarian.png": "3554cf4a6859043c690d774cb0bf9d5c",
"assets/assets/food/burger.webp": "40593d72000b4feafe25ba6d8e7a1b26",
"assets/assets/login_background.webp": "7d03deb9277f36288fba6f67abdde810",
"assets/assets/profile_pics/person_cesare.jpeg": "953a93138a29882976b30c386396305a",
"assets/assets/profile_pics/person_crispy.png": "f72ff9baa079eb3a9eacd6b805d77c43",
"assets/assets/profile_pics/person_joe.jpeg": "c03b996f28a9a0f74e81d0565d4218a3",
"assets/assets/profile_pics/person_katz.jpeg": "9d93dc4bef3ce0e055eeb486a1af911a",
"assets/assets/profile_pics/person_kelvin.jpg": "074164acdd5150eee97179b89b183b15",
"assets/assets/profile_pics/person_kevin.jpeg": "ecc19eb1c1dc1704fca0c7502adb7e5e",
"assets/assets/profile_pics/person_manda.png": "4b13f8089c95e0334717e05c8c0aeb68",
"assets/assets/profile_pics/person_ray.jpeg": "d21589f30a1f5c968bd4686520e50b25",
"assets/assets/profile_pics/person_sandra.jpeg": "313347d60d8a6693b8528cbf38be4435",
"assets/assets/profile_pics/person_stef.jpeg": "e2ce6888dbf5fc392c9322d9cfb54b29",
"assets/assets/profile_pics/person_tiffani.jpeg": "10f1b0e3af37b5569f59c07c61cdb970",
"assets/assets/restaurants/BistroDeParis.jpg": "77bb1f101e7936fd1ccb6ede8e1b37ee",
"assets/assets/restaurants/ElToroLoco.jpg": "cb4502824a00c9a5005361fdd6664acb",
"assets/assets/restaurants/GreenZenphony.jpg": "3415756752e370603c522820475fe9d6",
"assets/assets/restaurants/MamaRosasPizza.jpg": "986ac9c98ed4a00ced1bd09d86808c86",
"assets/assets/restaurants/MamaRosasPizza.webp": "057456ce82aa9cf68cce9105e8350f5d",
"assets/assets/restaurants/OldKyotoSushi.jpg": "224067b0f7b07a662cb5f45d7115e02a",
"assets/assets/restaurants/RavisNaanHouse.jpg": "831293c5603e10feaa456d36481d1ac6",
"assets/assets/restaurants/TandooriFlame.jpg": "4e69e7fee5c534597b52ac3f37fb3f05",
"assets/assets/restaurants/TheBluePrawn.webp": "d26cdf1df280f00aecff959d33719c3e",
"assets/assets/restaurants/TheBreakfastClub.jpg": "12f9ba569c8484d0b7a974ed7f741f18",
"assets/assets/restaurants/TuscanOlive.jpg": "55cf0b8fd951a9fc8442deeb3f6acd75",
"assets/assets/yummy_logo.png": "9a9744983c29ece764f22fac4f4315dd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b3b05935d5a9dc541f692b5d829de78d",
"assets/NOTICES": "98bd26599596df5f90275d2d65dce379",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "32cc31c7f950543ad75e035fcaeb2892",
"canvaskit/canvaskit.js.symbols": "cc5704e0ef2428716d521cca8a5407a4",
"canvaskit/canvaskit.wasm": "bd99b6414d17f38ddf3d38cc2327c6c9",
"canvaskit/chromium/canvaskit.js": "6a5bd08897043608cb8858ce71bcdd8a",
"canvaskit/chromium/canvaskit.js.symbols": "eb8bbbea221d16be0c0157d035f0005a",
"canvaskit/chromium/canvaskit.wasm": "e4373621fcca520db26bbe1419de5312",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "a6bd1b7f2562a04db7cc22d151ad85fa",
"canvaskit/skwasm.wasm": "06280586b0c7423eb031389a7e814c16",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "76e32161c6f1ffd17ce68ad26eb14952",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "71a7d907a72ea69c388ae3bf10c5308c",
"/": "71a7d907a72ea69c388ae3bf10c5308c",
"main.dart.js": "a7bb19f54bc7ae1864d942b6bd71612a",
"manifest.json": "e8f5a6dadc33be840f4d4f75f767cdbb",
"version.json": "46323f0c35918e2787983cfcac7436be"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
