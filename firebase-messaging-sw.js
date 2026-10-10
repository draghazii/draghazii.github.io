importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
const firebaseConfig = {
  apiKey: "AIzaSyBhVedB0Md_FaRq84CoKQqV6-hGD8SUZxs",
  authDomain: "ghazi-foundation-f0319.firebaseapp.com",
  projectId: "ghazi-foundation-f0319",
  storageBucket: "ghazi-foundation-f0319.firebasestorage.app",
  messagingSenderId: "127522428349",
  appId: "1:127522428349:web:deed39176d1e30c7932ed4"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.onBackgroundMessage(p=>{
  const n=(p&&p.notification)||{};
  self.registration.showNotification(n.title||'نۆۋەت',{body:n.body||'',icon:'./icon-192.png'});
});
const CACHE='gazi-v5';
const SHELL=['./','./index.html','./book.html','./manifest.json','./icon-192.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).catch(()=>{}));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const r=e.request,u=new URL(r.url);
  if(r.method!=='GET'||u.origin!==location.origin) return;
  e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp));return res;}).catch(()=>caches.match(r)));
});
