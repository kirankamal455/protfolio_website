'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4fb685abe349be3711fb9b968163a6c1",
".git/config": "8fa63e52efbc327be07ac6d5f0c9cfae",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ca964fd6cb68cd5abcad0b365f671280",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0c9d0e72219dcabffb5f6ae6bdc755fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ebdfbb3839bb279e1c23188110d0a886",
".git/logs/refs/heads/master": "ebdfbb3839bb279e1c23188110d0a886",
".git/logs/refs/remotes/origin/master": "805d282f9641f5816f895246c3d5d603",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/09/23925d1732b68b454eeb10eb4dfc5aa9d2f9f1": "a6f4fbde11128c61e35405cd4998b1c9",
".git/objects/10/a748a1c674b75e58797c80ba25bf4b839db56f": "73526b0b6099a9b89d63dd9324d750c8",
".git/objects/14/aa196a55e711b7d7bbb551aecb6c2370104df4": "3c097f852492e66120047ebdf11df81d",
".git/objects/18/7fb8665f783afd63383c1007cf7f6e0e3a5963": "3e6b015e92f87da8095e7261eb8aff65",
".git/objects/18/88a9c799ebac8b77f33773c0c3c0101edd73db": "d95e3884611143a086a3837c12d7507b",
".git/objects/19/93f323bf9f27ce80d8b41f3bc03c2494e6effa": "c10b0fe7ef8bb2ed626c36efeb86d5d2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/df00ad0e9667c4c0ba00fbb731724e7481ef49": "d25091711f7e739ecbbeda2dc956fc74",
".git/objects/22/d8c7c045e090872d74da9f1fdb8eaa5d2cfcd1": "abc84af70f3fc2059fb07ba49becb6bb",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/26/5981bdd274fe3b11d45ca72e86badb024d3d06": "cf83d5694e94193389cbd25433bade43",
".git/objects/33/b87b1025138f1bee8aacfe3c1837e08ad40100": "b89bc56d9f49b7df04ed9f6958a313e3",
".git/objects/43/5ccfd336af7b014d931de2fc5df0fe1f313270": "237fd21431e2c770a2cc2ec0e60a0ce6",
".git/objects/45/42e8582b408f78922ffee04b3d8d902d2ef6cf": "8fc820e890ae47a0f6667f4349526577",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/50/eb56bb8b23eeaf3993ca0c8ff4f6c1c4a40e56": "b37bf977bee00c2bf605e3fb5d447173",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/59/4808034a393f2a831a1c5c08edaf1ea16515dc": "c31485e253da60da835cf725a4633d77",
".git/objects/5a/87bb14c460c93a48c22974507e3387c08466af": "8ec7971704205ed467c45bd840beba5a",
".git/objects/5a/bac3545ccfe16fc023bfd8ae24c7a0abb81c1a": "1e8bea8f9b6304001bf9eb19d8434ea4",
".git/objects/5b/f76e798250a80a76c9e069d49154cef4830fa3": "4c40da1f9a433f2bd4e24650a6bf2691",
".git/objects/5c/31db11700a3474231e6ce87c88bd5e8396302c": "d581424ea3f41d3d2af719f8fd5c4bda",
".git/objects/5e/501f5bc0b67a4f8982dee6d6c510020bf3becb": "2e78225e5b0d67f2b1544c5b2da076d1",
".git/objects/5f/778422ed3e32c257c769429482635842588d9f": "0efaf81dd1334576d617da65473d2cea",
".git/objects/66/47e44ad0a67a390a3832bb5f29e484f97974bb": "05465f7cc139855eb91f4ccccc52b13b",
".git/objects/6a/ad09ebcdbfe4fbc1c803538cfa5273c3627e3a": "d8318a0cfa243eeac1dc45b435a81360",
".git/objects/6e/2f2a50e367fe460e42c0f8c671ee84d5054cae": "e77bc302036b201c60821b364fdc3d02",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/72/9ffd76571998f850b8783688046f7eba8fbaa8": "3f30aee57e0c852b7e971227682496cb",
".git/objects/77/e60050ee2cad3a68ee7afd98a7d84333f9124a": "9105f83a0dc70ee90917fa312544858f",
".git/objects/81/b873559d4bf9f61c381a32749466ea61235803": "552a315bef65e4422a93d71b1078babe",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/adfdce575c79295178024f4e75d6c1ac68f39e": "b52a0bb3cf62b25570d2c7a27227923f",
".git/objects/8c/037ec3b714c99bb819c43aaf7a843a04289401": "a4e142b24d3dca442a6e3fbd48f22f1a",
".git/objects/8c/69b8e1e2685311d3641b83086d2ca2cd5b0c2b": "7cff1157e53c7d84974969aebb016698",
".git/objects/8c/cbc8aa17841d611727e37aa4e0fe3c48d1df49": "9a3dad83458c00ff566754829d4e5d03",
".git/objects/8f/dc4d1cb27de29afce54a314d5fcb923463c44c": "796516be62c9e2bad50511b8d47dd77f",
".git/objects/91/8b703b81641a2f7a11b184600d5d883f9579e6": "3d05939aa61b340dd970ff58a75a999b",
".git/objects/a6/59e00463e0ed62a497a207126495512bf62fee": "1b9c3a5403c57bd6db85d23b5ef8741a",
".git/objects/ab/260cfb62265f2e3d538348d184c45928cf1f21": "f88cf5758099549b048701866fa49992",
".git/objects/ab/b1412830367ffd6e56a8d188ede346f170eedd": "93d28a786d9f412f0e49ec15a38c4afb",
".git/objects/ae/7834000c350aafd19b86d6fb10ea9299ce4d25": "f3c1fb90f0b0ee65f8431933e58b65e3",
".git/objects/b4/e864ce471588b3ba2af171e30799889a85a94c": "926dfb04fbe01a7cd0758f2114ed3c51",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/c3/94c3aa145b3da5149a44e743c328a9a782c3ac": "f75fd945203239bda88243d94c2c7f6a",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c9/010dbcc646c375853052343f9379868dedf422": "717b3003b47d7a615eccd75a28b4308f",
".git/objects/ce/960a51d591fc54eb1c65aa0cce152bed2b95c7": "d2bf5b65c69bdc5564eafbece94bb30e",
".git/objects/d2/90926a5954b8524aab07628471526adbfcb86f": "133bbabd74e3ac1429b18ca63b2e6ba1",
".git/objects/d4/1620a090c9e5938611456f5469583288c4ba4e": "85c3556ce405d556fdb815b94cb997ef",
".git/objects/d5/b52f5ea9a2686c79a9b0801223981e2b8381d5": "7997b2bf1bd941ba1a41873f66b8ea6e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/9a884a174994559abd095b06dcd4e23896e8df": "3bada3316a18f726cf8a217c226cc9d2",
".git/objects/db/1c6a9f21152abe00cb4b76ccd5663e86c01d1f": "e0da4cec3a3e42aedfcc8b1322f92448",
".git/objects/e1/3e0a5309879e26078a2e5fce78c8da2f9fba34": "2c5017c4d1431c6b20b3a88e8a4d3ebf",
".git/objects/e6/8219aa608755c9f0ef0ecf48eabf991e57177c": "a02516dc2b82254d614bb0b2f5f12987",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/94ce0b813db62e5d4ff0546dc76f3db8acd371": "c7ec12b998f51d0009bd27d806bcf64b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/3ee3fd1daadaa47dd3045a65c0f536e1f321b7": "a7000c6481013c71e18a0c9e3f78d96e",
".git/objects/ef/ff9644a449275026d31d50ea0e1c61dad29c77": "c8804c642fa8ac6132f1f029a4ee8315",
".git/objects/f1/742e0bb897f04186315a6650a7532e921264a1": "fbca3fc45877d43e560422fa7ab4a381",
".git/ORIG_HEAD": "62cb7285a8e5d064b02e64ce7b6f393b",
".git/refs/heads/master": "62cb7285a8e5d064b02e64ce7b6f393b",
".git/refs/remotes/origin/master": "62cb7285a8e5d064b02e64ce7b6f393b",
".github/workflows/azure-static-web-apps-ashy-mushroom-019082e00.yml": "fb13fd9b368076029f9ce4d7c374227a",
".github/workflows/master_kiranportfolio.yml": "e1a1a73d2b64e177c114c533f897673d",
"assets/AssetManifest.bin": "4348e8991bfc42807a1197d49c6ee3fe",
"assets/AssetManifest.bin.json": "f0cb54f336b8a8872dc82ace788ce4be",
"assets/AssetManifest.json": "484916cdb69a057ca2d33bcba73f6616",
"assets/assets/images/facebook.png": "2189a31aa097f8c2688e439e42f21952",
"assets/assets/images/insta.png": "ad8156815e21ae743b78042d249a2b0e",
"assets/assets/images/linkedin.png": "1f96321f69d2b42aaea8b04e32509df8",
"assets/assets/images/profile.jpg": "64ef801a6d7b265ad0070855a2734e75",
"assets/assets/images/tools_images/android_studio.png": "64aae3ccbfd0f47da949f34b8d782e94",
"assets/assets/images/tools_images/aws.png": "ce464549a02e0e085bf43a74ac18203a",
"assets/assets/images/tools_images/dart.png": "2e0719b33b5cdd1ece46611b4d3d4a81",
"assets/assets/images/tools_images/figma.png": "126b404b41e6abf1002230a9d2671c31",
"assets/assets/images/tools_images/firebase.png": "150d6459769c372650856932d8ff1509",
"assets/assets/images/tools_images/flutter.png": "442f012d38b6d3c7780029f3868e4e80",
"assets/assets/images/tools_images/git.png": "5f551c335eb3dc4b81ae34cf93b9a7f1",
"assets/assets/images/tools_images/github.png": "5a3336ec283572fe3a4d72aed0492705",
"assets/assets/images/tools_images/python.png": "8fc980504e086ccec2612f8bdb6bfe15",
"assets/assets/images/tools_images/vscode.png": "c6c0f72de1b41af0b47da1bed3388374",
"assets/assets/images/whatsapp.png": "f163ad3ac3f53cb9d246e8095ec2cccc",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "11c6bff3c3728b84943d71c8afb03549",
"assets/NOTICES": "77f05379b0ed806df7999ceb8d3154e9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "cf606d66d7fecdfc77b8c4fd82e65a9c",
"canvaskit/canvaskit.wasm": "0eb304f79dba1141b8d542a7964b6c45",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "397ab23278670c9d90f39ddbe0bacf45",
"canvaskit/chromium/canvaskit.wasm": "8592076e87f546b8b68e0b573ac1d88a",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "ebeb64657a80a98ad1ee8b00d1b3d6be",
"canvaskit/skwasm.wasm": "ea0bf23be096033f66cbe6eccf07adf3",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a0e1d174f71f8c832a63592756895e83",
"/": "a0e1d174f71f8c832a63592756895e83",
"main.dart.js": "1f573d79bcf8b45b9973cfc904a1a35b",
"manifest.json": "34f7f658974bc14db77efd9b39771b8c",
"version.json": "04dccb76c3f72933c9f99b96f096e8c9"};
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
