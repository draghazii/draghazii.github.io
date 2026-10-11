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
const CACHE='gazi-v7';self.addEventListener('install',e=>{self.skipWaiting()});self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));