'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "154be5209cc23b06446fb358f099e384",
"assets/AssetManifest.json": "f2db9924fd1b92aa51e62d43514e7dcd",
"assets/assets/json/resume.json": "521926c8f766398bc940763786b04683",
"assets/assets/lottie/cute_bear.json": "c2bb623b8df06f25ba9ed6af197da5ee",
"assets/assets/lottie/dev_bubble_red.json": "dd460f5cef591d0a4518644c444019d0",
"assets/assets/lottie/face_biometry.json": "7bd8414448188c6194d864b9629f15da",
"assets/assets/lottie/dev_floating_views.json": "1f101fd82df3e15820fe7f061ebff0e6",
"assets/assets/lottie/pioneer.json": "3828c6e0fc8acbbf0aba8ff73c8e72ff",
"assets/assets/lottie/video_editor.json": "ed016aa952fe597e27f58155b36ef838",
"assets/assets/lottie/dart.json": "6ebaf3907dac8af3f717d87fc7f6ab32",
"assets/assets/lottie/frames.json": "f4f9a6694240f94f466e9f9bb1cc7531",
"assets/assets/lottie/fun_avocado.json": "da2c3fe1483ed4c7389d9ea201018e11",
"assets/assets/lottie/app_dev.json": "44cc492391aace0ffe0a6eadc6f7455b",
"assets/assets/lottie/disco.json": "f618039f34fbe87a72083256d7daf8ed",
"assets/assets/lottie/cicd_b.json": "e063ab1427b3c1a49ef0a0e6554a7266",
"assets/assets/lottie/safe.json": "fa28893549f92b5496f1596e49b10eaa",
"assets/assets/lottie/frank.json": "30f9af188bc2b8f97b24974ceb517368",
"assets/assets/lottie/orbit.json": "5044e3902c44f7008daf154147486fb1",
"assets/assets/lottie/astro_dev.json": "b7f6c23d741ac90bc9b19637a4efe9ad",
"assets/assets/lottie/team_chart.json": "727091ccefb2f963a34bba437816351d",
"assets/assets/lottie/space_walk.json": "768eb9e8a7a512c26f2f5709872a9055",
"assets/assets/lottie/row.json": "818ca6ac3c749d596090f5e0c093a77a",
"assets/assets/lottie/id_pay.json": "d4bd73d61bebe6cc453b9b421bfdf16c",
"assets/assets/lottie/binary_blue.json": "6eeb4e8797e05d3a6af41d77cf51c08d",
"assets/assets/lottie/discord.json": "8316d89b4f7b576a8283a3f11933e0f6",
"assets/assets/lottie/lock_unlock.json": "0b4d097258194ca8f5438bdcbc32fa11",
"assets/assets/lottie/cicd_c.json": "b9704d41839c8a13b2a4b1d650282731",
"assets/assets/lottie/qr_pink.json": "378d2226467dc7b1b64e265ccc27b2ec",
"assets/assets/lottie/golf.json": "6893847a805639c9933c8a53884437a5",
"assets/assets/lottie/hyper_space.json": "d0e7730ef84c1d5240b5a7741b5d8c51",
"assets/assets/lottie/theme_customization_a.json": "dc3b7bf54a8ca4e05951c65ae8b3a66a",
"assets/assets/lottie/settings_dude.json": "bfda2907d2fe2c0f89a2d6b613599c31",
"assets/assets/lottie/rocket_burst.json": "7414044a61fc6c49f56be192a6de6f3a",
"assets/assets/lottie/house.json": "d108ecc766ff24263aafe29409d7769c",
"assets/assets/lottie/cat_not_found.json": "b720cf2dd2c75bc722f513bb9ce1be2f",
"assets/assets/lottie/orbits.json": "eacfb4467ad0c3bb02478b5511c91190",
"assets/assets/lottie/load_check.json": "4647f9a81fe33ade884c1109965e3e79",
"assets/assets/lottie/hammer.json": "9c1e8926b220a4badf05afc490b35499",
"assets/assets/lottie/global_network.json": "c4846272172f1823c30897e99c435386",
"assets/assets/lottie/dev_ui_ux.json": "f6fd1352cd50e76e274223d9aee65d6f",
"assets/assets/lottie/cicd_a.json": "e8aa3f17b4fe2e9033708b00d1412481",
"assets/assets/lottie/space_invader.json": "2a3ca82fa084efe69c3b83e1924a769b",
"assets/assets/lottie/streaming.json": "9619de27bff4298952d506e2ebb38f7d",
"assets/assets/lottie/rocket_dev_space.json": "680dc3a95c40abb732a6857abf814ab5",
"assets/assets/lottie/abstract_chart.json": "8ea2d0cb3716551411630812012839f0",
"assets/assets/lottie/laborer.json": "3c5944980cdd13b43e3dcfeebbe1e06b",
"assets/assets/lottie/space_man.json": "23851fc3a1533fa847ae12038426780a",
"assets/assets/lottie/bowl_loading.json": "e01ee00a5dee78bf63cedb00dcdbf767",
"assets/assets/lottie/floating_pink_dev.json": "a621c50e78c26dc8d9e77104fb4313ed",
"assets/assets/lottie/midnight_coffee_dev.json": "6f02bb8ffc3e8696249894d6233e86a6",
"assets/assets/lottie/highlight.json": "6595dac8ae65bed75de1d3e1c544ae24",
"assets/assets/lottie/desktop_widescreen_web.json": "4ba2dd23f5e53bfa40272187a06c72f3",
"assets/assets/lottie/cross_platform.json": "d5b0491d33ec5c32ce50991bb23b7545",
"assets/assets/lottie/geo_location.json": "fb32a08e236dea191e8936c5a24ac926",
"assets/assets/lottie/cat_dev_success.json": "198a1aaf29ccd1a32efe3b6951b7d359",
"assets/assets/lottie/dev_project_launch.json": "45258d962d66cba0a15379b9143f29a2",
"assets/assets/lottie/key_presses.json": "1d447c8c0e143ffdaba4a95b594087bc",
"assets/assets/lottie/cicd_d.json": "a1e483b6484c223e6b9a46390e27ba1c",
"assets/assets/lottie/loop_loading.json": "d172be7bfa4889b31d162051567df0bb",
"assets/assets/lottie/like.json": "716ee1da442002dcb3e74133fd60c134",
"assets/assets/lottie/line_dice.json": "64c8d68908850449469136e8258333ba",
"assets/assets/lottie/camera.json": "0c581bda5eb761fb672d299333795e5f",
"assets/assets/lottie/qr_autumn.json": "f9e0fbd81d4961cadd8fb7c3bb02e827",
"assets/assets/lottie/gears.json": "af2c3a3116068dc373ad670bdab84a62",
"assets/assets/lottie/switch_game.json": "939aa21623300f2d4115114a1e4a6df3",
"assets/assets/lottie/binary_orange.json": "2d879c94a821059b3e08de244b89b5fa",
"assets/assets/lottie/target.json": "36c246e784c73716f7983b8e3db3e426",
"assets/assets/lottie/joystick.json": "aff9b44889750c7e70b55cef9cb88883",
"assets/assets/lottie/eight_dice.json": "fe4b2d5dcc7f7f8c4cef611129aad07b",
"assets/assets/lottie/study.json": "760a853f6c43b2426bbefc8ecf15df68",
"assets/assets/lottie/dice.json": "528a4f3444ea9851feb534e75ca5ca6b",
"assets/assets/lottie/settings.json": "3f2928bb75a7e48f770c1e4d94ee4e07",
"assets/assets/lottie/astro_flag.json": "d367458f6aa9751584761e766c078ab6",
"assets/assets/lottie/theme_customization_b.json": "314dc0f26022f5e381f1f77e057e27a4",
"assets/assets/lottie/dice_six.json": "98ad81e0fb99dc9d05340d9af4d8b8df",
"assets/assets/lottie/joker_dev_ideas.json": "7556103a83ec322824a543145404781c",
"assets/assets/lottie/hackintosh.json": "8272bec55bd835e000a79b54b9a33ab8",
"assets/assets/lottie/red_assemble.json": "6ee1a6033b07ac8145f83e21b09a6472",
"assets/assets/lottie/team_motivation_success.json": "7e38bf70beef91d6172b0a9c618e1844",
"assets/assets/lottie/rocket_spin.json": "4dcef8acf62f34984b85726df1c2dd93",
"assets/assets/lottie/icon_settings.json": "e0acc80110f7be170edaddc7dbe81cf1",
"assets/assets/lottie/banana_meditation.json": "1f5b5b71f8c77e019ac117d15cf9a635",
"assets/assets/lottie/under_construction.json": "a38b6401d2992aa7dfb750384b7efacc",
"assets/assets/lottie/secure_pay.json": "79fff1430f0c96999c8e59aaafa81dbf",
"assets/assets/lottie/wireframe_cursor.json": "4962f7e210b03417a99b690ca2175bbf",
"assets/assets/lottie/flutter_logo.json": "14ac56dc8db8e84c8e6bbdf8c56317ed",
"assets/AssetManifest.bin": "f3ae3b430f718bb26463dc0691c0b743",
"assets/AssetManifest.bin.json": "ab475886a1cb0770487f704f55be8fde",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/NOTICES": "1fbdf794b28424001e9169d444b9d508",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"version.json": "3d4319178ebd39f82a4d3e4885f25ace",
"index.html": "4d5eccafd54ca62811b49474e106ae5c",
"/": "4d5eccafd54ca62811b49474e106ae5c",
"main.dart.js": "0fd9a9aaec615108e57f7f8edd6ee7c4",
"manifest.json": "0bc62cc84ffb31067eedb846a42e4126"};
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
