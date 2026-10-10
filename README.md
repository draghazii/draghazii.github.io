# غازىلار ساقلىق مەركىزى — ئەپ بولىقى

## ھۆججەتلەر
- `index.html` — ئەپنىڭ ئۆزى (خىزمەتچىلەر ئىشلىتىدۇ)
- `book.html` — بىمارلار ئىشلىتىدىغان ئاممىۋى نۆۋەت ئېلىش بېتى
- `manifest.json`، `firebase-messaging-sw.js`، `icons/`، `icon-192.png`، `apple-touch-icon.png`، `favicon.png` — PWA / ئايكون
- `firestore.rules` — Firebase قائىدىسى (GitHub قا يۈكلىمەيسىز، Firebase Console غا چاپلايسىز)
- `.nojekyll` ۋە `.well-known/assetlinks.json` — GitHub Pages ۋە APK ئۈچۈن

## 1) GitHub Pages
1. GitHub دا يېڭى repository ئېچىڭ (APK قىلسىڭىز نامى `سىزنىڭ-ئىسمىڭىز.github.io` بولسۇن).
2. بۇ بولاقتىكى ھەممە ھۆججەتنى (firestore.rules دىن باشقا) repository نىڭ ئاساسىي قىسقۇچىغا يۈكلەڭ. `.nojekyll` ۋە `.well-known` نىمۇ قوشۇڭ.
3. Settings > Pages > Source = Deploy from a branch > Branch = main / (root) > Save.
4. 1-3 مىنۇتتىن كېيىن ئادرېس چىقىدۇ: https://سىزنىڭ-ئىسمىڭىز.github.io/

## 2) Firebase
Firebase قوللانمىسى (FIREBASE-SETUP.md) غا ئاساسەن:
1. Authentication > Sign-in method > Anonymous نى Enable قىلىڭ.
2. Authentication > Settings > Authorized domains غا github.io ئادرېسىڭىزنى قوشۇڭ.
3. Firestore Database > Rules غا `firestore.rules` نىڭ مەزمۇنىنى چاپلاپ Publish قىلىڭ (ئالدىن كونا قائىدىنى ساقلاڭ).

## 3) ئەپنى ئىشلىتىش
1. ئەپنى تېلېفوندا ئېچىپ «باش دوختۇر» پارولى بىلەن كىرىڭ (تۇنجى قېتىم پارول بېكىتىلىدۇ).
2. سول تىزىملىك > 👑 باش دوختۇر مەركىزى > 🗓 توردىن نۆۋەت ئېلىش > بۆلۈم قوشۇڭ، `book.html` ئادرېسىنى يېزىڭ، QR نى ساقلاڭ.
3. ئەپنى تېلېفوننىڭ ئاساسىي ئېكرانىغا قوشۇڭ (Chrome: ⋮ > Add to Home screen).

## 4) APK (ئىختىيارى)
1. https://www.pwabuilder.com غا كىرىپ GitHub Pages ئادرېسىنى كىرگۈزۈڭ.
2. «Package for stores > Android» نى تاللاڭ، Package ID: `com.gazi.health`، APK نى چۈشۈرۈڭ.
3. PWABuilder بەرگەن SHA-256 ئىزىنى `.well-known/assetlinks.json` دىكى PASTE_SHA256_FINGERPRINT_HERE ئورنىغا يېزىپ GitHub قا يۈكلەڭ (ئادرېس بالدىقى يوشۇرۇلىدۇ).
4. keystore ھۆججىتى ۋە پارولىنى ياخشى ساقلاڭ. يوقاپ كەتسە ئەپنى يېڭىلىغىلى بولمايدۇ.
