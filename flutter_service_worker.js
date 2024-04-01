'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1ae844ea5143b27c30d584f33f2d6bed",
".git/config": "8fa63e52efbc327be07ac6d5f0c9cfae",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "009ca903586809e58b16eb6ce671e0d7",
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
".git/index": "dfa676476ee4d7ca0dfcf12cf32f4d28",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "63049edd624f13c43a7e27a45b0c8f32",
".git/logs/refs/heads/master": "63049edd624f13c43a7e27a45b0c8f32",
".git/logs/refs/remotes/origin/master": "66e0cd5c257710e45032ebb62ab473c6",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/07/a15980bbafd83404da251ea5d7bc85d2370707": "0661bd1a4e42adea034f7db3651ddcd0",
".git/objects/09/23925d1732b68b454eeb10eb4dfc5aa9d2f9f1": "a6f4fbde11128c61e35405cd4998b1c9",
".git/objects/09/861b0f255adbe1088f3b41ba17c11f3c52f1e3": "5ac7c676e65e3ad934feee4d320052dd",
".git/objects/10/a748a1c674b75e58797c80ba25bf4b839db56f": "73526b0b6099a9b89d63dd9324d750c8",
".git/objects/11/f962f686ec2315dc8c1eb368e481c00419f732": "bbdc9e9a99873fb753b9f437cd7f5b6e",
".git/objects/14/aa196a55e711b7d7bbb551aecb6c2370104df4": "3c097f852492e66120047ebdf11df81d",
".git/objects/18/7fb8665f783afd63383c1007cf7f6e0e3a5963": "3e6b015e92f87da8095e7261eb8aff65",
".git/objects/18/88a9c799ebac8b77f33773c0c3c0101edd73db": "d95e3884611143a086a3837c12d7507b",
".git/objects/18/e097b7dcaab3c789bc8bb55d11352b76be8d24": "dfd982cc24f04bb3dbff778a1b59322d",
".git/objects/19/93f323bf9f27ce80d8b41f3bc03c2494e6effa": "c10b0fe7ef8bb2ed626c36efeb86d5d2",
".git/objects/1c/c3d745dd095013f87dcea3178fcd67bd119358": "7e1fca4f9d4d588f217d79d3e6ded221",
".git/objects/1e/055ff8e6dce6df8f228805ef169942897847df": "db21dfa8bc02f7d4c905e1fdebdd3678",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/df00ad0e9667c4c0ba00fbb731724e7481ef49": "d25091711f7e739ecbbeda2dc956fc74",
".git/objects/22/d8c7c045e090872d74da9f1fdb8eaa5d2cfcd1": "abc84af70f3fc2059fb07ba49becb6bb",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/26/5981bdd274fe3b11d45ca72e86badb024d3d06": "cf83d5694e94193389cbd25433bade43",
".git/objects/2d/7f2441028b56d7b72d17e8ffadfbbd598b2a44": "e313f0c18be5679d433be93095b0eb3d",
".git/objects/33/b87b1025138f1bee8aacfe3c1837e08ad40100": "b89bc56d9f49b7df04ed9f6958a313e3",
".git/objects/37/c6eacf3d2ed134ddb18417d38d20cbe5893ba2": "1da6b8443e4826395ccfdcc8bdaf4414",
".git/objects/39/ff17319dfab5e450245f6c0c0fbcc269128b1f": "9fee67fa0e87b71db9c4ac8406125d2a",
".git/objects/3a/53e2f04ee5cd701b903b7bd7db82b75b3b9985": "abd94155cadfbc67c6dceb8b74751a72",
".git/objects/3d/e644b3ab0215d5d414e36bd7cd2b1538e3055a": "29281d1354ff41fb7bc9f3c61deb5fa9",
".git/objects/43/5ccfd336af7b014d931de2fc5df0fe1f313270": "237fd21431e2c770a2cc2ec0e60a0ce6",
".git/objects/44/cbbf57a2d6902c2073468a3a27296d736eb11a": "6357052fbb5361d21753430a7cce00ec",
".git/objects/45/42e8582b408f78922ffee04b3d8d902d2ef6cf": "8fc820e890ae47a0f6667f4349526577",
".git/objects/47/14a762ae3a8cdae351c5031085c9be2aca9f33": "d548bc42ae93df4ea9aaf4f094065de2",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/50/eb56bb8b23eeaf3993ca0c8ff4f6c1c4a40e56": "b37bf977bee00c2bf605e3fb5d447173",
".git/objects/51/aa3ca8cb78672681d6b8ff8e4153dee034a633": "96e67847d825d0d67ebf9a08ddd5c0b8",
".git/objects/52/234b17a97caa3a0ca153d2f93fb016b113db32": "365e4b39b90693c0fafb6abd4d43fc92",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/59/4808034a393f2a831a1c5c08edaf1ea16515dc": "c31485e253da60da835cf725a4633d77",
".git/objects/5a/87bb14c460c93a48c22974507e3387c08466af": "8ec7971704205ed467c45bd840beba5a",
".git/objects/5a/bac3545ccfe16fc023bfd8ae24c7a0abb81c1a": "1e8bea8f9b6304001bf9eb19d8434ea4",
".git/objects/5b/f76e798250a80a76c9e069d49154cef4830fa3": "4c40da1f9a433f2bd4e24650a6bf2691",
".git/objects/5c/31db11700a3474231e6ce87c88bd5e8396302c": "d581424ea3f41d3d2af719f8fd5c4bda",
".git/objects/5e/501f5bc0b67a4f8982dee6d6c510020bf3becb": "2e78225e5b0d67f2b1544c5b2da076d1",
".git/objects/5f/778422ed3e32c257c769429482635842588d9f": "0efaf81dd1334576d617da65473d2cea",
".git/objects/61/5ed2ef260298802736a91c4eb89882eeec1684": "970bd0d41eb8890f2007275f7a6d9758",
".git/objects/66/47e44ad0a67a390a3832bb5f29e484f97974bb": "05465f7cc139855eb91f4ccccc52b13b",
".git/objects/6a/ad09ebcdbfe4fbc1c803538cfa5273c3627e3a": "d8318a0cfa243eeac1dc45b435a81360",
".git/objects/6d/67d5f8243f0661e1d9861e57e57e8a76078c25": "c53c8e6546c88dbfe54ad6e098df62d1",
".git/objects/6e/2f2a50e367fe460e42c0f8c671ee84d5054cae": "e77bc302036b201c60821b364fdc3d02",
".git/objects/6e/ffef8741ab77d259e88c719b96bf5f17e08c00": "f291fb02802308682babddcab92690d4",
".git/objects/6f/034118cb2f74e67a9ef3e938b3aec5dbf4898a": "a5799d574cb8dce752e19e4f71424826",
".git/objects/71/58b8bcd2bcd39770f2535c9663ab0fd6a30779": "1856044e03711a5f281cc6d262061269",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/72/9ffd76571998f850b8783688046f7eba8fbaa8": "3f30aee57e0c852b7e971227682496cb",
".git/objects/72/da347cbada7a87abf6ca12d18d5f1215f4639f": "3b4456a6bb47f8bb92ef06baa8431422",
".git/objects/75/9b97fb9fc691d72638f06494d79bdf4b00b23b": "ec1d1d397c84d777f32b4b355334108e",
".git/objects/77/41c18017ed5885f9d53954cbf0a1b2da93dee0": "15c783f3c655e606ef5e2c523535d165",
".git/objects/77/e60050ee2cad3a68ee7afd98a7d84333f9124a": "9105f83a0dc70ee90917fa312544858f",
".git/objects/7f/c27209fc1d5c226378ab55950b11803c3d1f07": "79baf9eb466cc3a166be403eb48c819e",
".git/objects/81/60815bd54a34b45390e4c5e4754335b51215d1": "edf916143e45e8261182e2044fe380a2",
".git/objects/81/9eb4e25cb200c0be166d0cdd4d4c829aaffef9": "67f8116302184a465f9dab66583cd305",
".git/objects/81/b873559d4bf9f61c381a32749466ea61235803": "552a315bef65e4422a93d71b1078babe",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/79867352bfa114cc5b313c31517ca631164249": "4833d4af2bdcbc6ac3dcaf141780e928",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/adfdce575c79295178024f4e75d6c1ac68f39e": "b52a0bb3cf62b25570d2c7a27227923f",
".git/objects/8c/037ec3b714c99bb819c43aaf7a843a04289401": "a4e142b24d3dca442a6e3fbd48f22f1a",
".git/objects/8c/69b8e1e2685311d3641b83086d2ca2cd5b0c2b": "7cff1157e53c7d84974969aebb016698",
".git/objects/8c/cbc8aa17841d611727e37aa4e0fe3c48d1df49": "9a3dad83458c00ff566754829d4e5d03",
".git/objects/8d/e43ef0f6929a291e89d9ed3084647f452a97fb": "8a0e0b66887bcaef93147a44890b2172",
".git/objects/8f/dc4d1cb27de29afce54a314d5fcb923463c44c": "796516be62c9e2bad50511b8d47dd77f",
".git/objects/90/2a841777cc054bdb16d73fd110b429c9155fff": "5d4ace3dc40a12c3b297b54bd7720569",
".git/objects/91/8b703b81641a2f7a11b184600d5d883f9579e6": "3d05939aa61b340dd970ff58a75a999b",
".git/objects/91/df3f9b817b837f466819e96c5e8701166ce018": "496567a052fd56033502f0eb90475f67",
".git/objects/93/34ef8c93bebd87b575d5d68f51eb0df01bf2e9": "95975de690963caa2704eb2c64536a86",
".git/objects/94/70b96aa48b2e88f8307de3f469fecfa92d7847": "551a08113da36e8134c0183d59f7216e",
".git/objects/98/cf18803fa36b565b871d287a5e4c239bbee3f8": "969df29a180d9445552740bf0b4079d3",
".git/objects/9a/1c9c0d20463bff61ea481916cf92c81202a2f9": "c287bc1da9279cde3f28a43676cb6bf9",
".git/objects/9c/1cccac1ec309bf40418194fd553c6d725d6d11": "bd6b9ab4052cfc766040fa43342ed09e",
".git/objects/9f/d11f11b3b1410ca63854da0f3b352ac9311a38": "a4ba0f442d41a893bd61785d99316734",
".git/objects/9f/f549cb6b4f3769eaa37f68d83fba9108040d60": "3d6bf9f323c79952c5cf6a1834d69842",
".git/objects/a6/59e00463e0ed62a497a207126495512bf62fee": "1b9c3a5403c57bd6db85d23b5ef8741a",
".git/objects/ab/260cfb62265f2e3d538348d184c45928cf1f21": "f88cf5758099549b048701866fa49992",
".git/objects/ab/b1412830367ffd6e56a8d188ede346f170eedd": "93d28a786d9f412f0e49ec15a38c4afb",
".git/objects/ae/0ff805374d09b40cf664cdce528fc34572a6e8": "db3fada2ebabd0f3853772035f3f70c5",
".git/objects/ae/1f443edb75780184e599af43886f231c492773": "1ff39b352d061ea6467d8a5fd39702bf",
".git/objects/ae/7834000c350aafd19b86d6fb10ea9299ce4d25": "f3c1fb90f0b0ee65f8431933e58b65e3",
".git/objects/b4/e864ce471588b3ba2af171e30799889a85a94c": "926dfb04fbe01a7cd0758f2114ed3c51",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/1475fcce1fdc32d5bfa969b6862261f6e3a724": "bc3dcff272a560764ec739bfb6c44f9c",
".git/objects/c3/94c3aa145b3da5149a44e743c328a9a782c3ac": "f75fd945203239bda88243d94c2c7f6a",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c8/edffb359f2175413f47cb6645bd54d65bc9b88": "ede08e171209a99e64ba22cb496b7f62",
".git/objects/c9/010dbcc646c375853052343f9379868dedf422": "717b3003b47d7a615eccd75a28b4308f",
".git/objects/ce/960a51d591fc54eb1c65aa0cce152bed2b95c7": "d2bf5b65c69bdc5564eafbece94bb30e",
".git/objects/ce/e89a24cf4745bf16695469d9a0a0ec86b93c66": "299dd58924590f3a89d61799f33da97a",
".git/objects/cf/3c37d527a73686923da5aad9331bc7fe590397": "1c167c4f6513200f5ea6a92b421b5e69",
".git/objects/d0/82d6cb0c2179f6a66b2be322dc3c9b7bdfa295": "20b5c89a7d0749334e954c4df02d0661",
".git/objects/d2/90926a5954b8524aab07628471526adbfcb86f": "133bbabd74e3ac1429b18ca63b2e6ba1",
".git/objects/d4/1620a090c9e5938611456f5469583288c4ba4e": "85c3556ce405d556fdb815b94cb997ef",
".git/objects/d5/b52f5ea9a2686c79a9b0801223981e2b8381d5": "7997b2bf1bd941ba1a41873f66b8ea6e",
".git/objects/d6/5fc3359e8a53afb7370a107dbe359b332f9511": "9ccb8f13a81189aaa6c8cc32627eec9e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/9a884a174994559abd095b06dcd4e23896e8df": "3bada3316a18f726cf8a217c226cc9d2",
".git/objects/db/1c6a9f21152abe00cb4b76ccd5663e86c01d1f": "e0da4cec3a3e42aedfcc8b1322f92448",
".git/objects/dc/606ed41e41e45ff6bde745bc8bf6bb182a1e1f": "d88ce1d882879f3b02325d2e4811cd53",
".git/objects/e1/3e0a5309879e26078a2e5fce78c8da2f9fba34": "2c5017c4d1431c6b20b3a88e8a4d3ebf",
".git/objects/e2/6ab8b83e1913541af5c7cce09db06a5e1d266a": "29cd54e2f55539895d8ab766f50a0a32",
".git/objects/e6/8219aa608755c9f0ef0ecf48eabf991e57177c": "a02516dc2b82254d614bb0b2f5f12987",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/94ce0b813db62e5d4ff0546dc76f3db8acd371": "c7ec12b998f51d0009bd27d806bcf64b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/3ee3fd1daadaa47dd3045a65c0f536e1f321b7": "a7000c6481013c71e18a0c9e3f78d96e",
".git/objects/ed/e2121b6103dd6e57934ce8cd9d066180589942": "b06d59059957c3c26c746d39f0759d68",
".git/objects/ef/a87bfbf6b10d418323fd8994a96bf24724cca9": "2ea71e72230ff9977f4024b81a1e6d24",
".git/objects/ef/ff9644a449275026d31d50ea0e1c61dad29c77": "c8804c642fa8ac6132f1f029a4ee8315",
".git/objects/f1/742e0bb897f04186315a6650a7532e921264a1": "fbca3fc45877d43e560422fa7ab4a381",
".git/objects/ff/e5bb69139d1ebb617207f029a67cf162f25910": "96021ba4ddecff5ae4f5ae63006190eb",
".git/ORIG_HEAD": "aae12dd0f815e385ed019603bee3c3e4",
".git/refs/heads/master": "aae12dd0f815e385ed019603bee3c3e4",
".git/refs/remotes/origin/master": "aae12dd0f815e385ed019603bee3c3e4",
".github/workflows/azure-static-web-apps-ashy-mushroom-019082e00.yml": "fb13fd9b368076029f9ce4d7c374227a",
".github/workflows/master_kiranportfolio.yml": "7b8c5995549a46a25e2aa8dbcd6ba33c",
"assets/AssetManifest.bin": "fa438d99728900518d83225044e0f99d",
"assets/AssetManifest.bin.json": "fd8249c85378d0b476a1330512cf412f",
"assets/AssetManifest.json": "985e4703d6d7b73e16bc982252cf3aa8",
"assets/assets/fonts/agustina/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/images/facebook.png": "4f1051b8d8c05d33fd826c7f3d7c96b4",
"assets/assets/images/github.png": "b37b05a713d8eebcbb475119e587859b",
"assets/assets/images/insta.png": "298f1f4437991737880fe628b7da1202",
"assets/assets/images/linkedin.png": "898c0407d74c75fa110de76293d96ddd",
"assets/assets/images/profile.jpg": "64ef801a6d7b265ad0070855a2734e75",
"assets/assets/images/profile_side.jpg": "27c06238902ef6246f45d531a6ce7467",
"assets/assets/images/service_images/api.png": "daf75684d2a0af10a85f76419c840e42",
"assets/assets/images/service_images/mobile_app.png": "9687a703fdda4a9ef0c2bd226b433777",
"assets/assets/images/service_images/opensource.png": "ef247263861261690ac6958d39695e08",
"assets/assets/images/service_images/prototyping.png": "a8d9bd925d2194361c72a76faaf2c6cb",
"assets/assets/images/service_images/ui_ux.png": "1ced4ee629fa2342c943436be86117ef",
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
"assets/assets/images/whatsapp.png": "9bc78ebfda041f8c4ccf1c8b0744c8ba",
"assets/FontManifest.json": "e75e4cca1b00b29c44f974791f7dc573",
"assets/fonts/MaterialIcons-Regular.otf": "d3d3b3a5c12347d32f875bb200e72309",
"assets/NOTICES": "62a1a7b269731c5df3bd752409ed0c45",
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
"index.html": "43c144e1f67545a738553ad608b280ea",
"/": "43c144e1f67545a738553ad608b280ea",
"main.dart.js": "24f1c4da73ad12eebe819e61bc32fbfc",
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
