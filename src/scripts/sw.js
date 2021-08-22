import 'regenerator-runtime'
import CacheHelper from './utils/cache-helper'

const { assets } = global.serviceWorkerOption
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']))
})

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache())
})

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request))
})
