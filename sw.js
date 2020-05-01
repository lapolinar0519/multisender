importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/036249e0ace4ae69f760.js",
    "revision": "9111aa362f102d59d7ebf406ab1beb63"
  },
  {
    "url": "/_nuxt/11da1999affd9eb3738f.js",
    "revision": "7defd81247ba4af050069dfdb24fbc79"
  },
  {
    "url": "/_nuxt/29f590f52b29488bfb45.js",
    "revision": "e0d09190613a5030bd5235fb249582c6"
  },
  {
    "url": "/_nuxt/35e3e83a2112b64db5ad.js",
    "revision": "fab4a75ee529457a81a2499c6ce2d246"
  },
  {
    "url": "/_nuxt/45d099e623f4474105ef.js",
    "revision": "830c8f8f8a846f739de93f7ceb705b92"
  },
  {
    "url": "/_nuxt/527f7935fb0150d96322.js",
    "revision": "03e7090070c4d60fbfa206c3c0492f39"
  },
  {
    "url": "/_nuxt/70de70ce9c7c7c945662.js",
    "revision": "f396993239e5be72f9912d9ccf71412e"
  },
  {
    "url": "/_nuxt/7845fa9e987123f14fdc.js",
    "revision": "aef5de7bd9ee592a0ffa7f017c3438fd"
  },
  {
    "url": "/_nuxt/9124cd458f40f62fc241.js",
    "revision": "9495977a5babc05cfc4be1a37ddd4360"
  },
  {
    "url": "/_nuxt/d103cd690e562709999f.js",
    "revision": "ded09a5cd84eab76b6e10408815ea231"
  },
  {
    "url": "/_nuxt/eaf7601e22f8ecad7083.js",
    "revision": "f5c606b66108193b8497a611c8c12705"
  },
  {
    "url": "/_nuxt/f87fc045a9802863e821.js",
    "revision": "643178287c2e56b60223ced02283f9d9"
  },
  {
    "url": "/_nuxt/fc5c6a78ac5f8038d71f.js",
    "revision": "855ed32ee87ae5a7b55bd86326e0be58"
  },
  {
    "url": "/_nuxt/febd56133734bc54f762.js",
    "revision": "e4d40c8027a37aa458f99f7345c339e7"
  }
], {
  "cacheId": "multisender.app",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
