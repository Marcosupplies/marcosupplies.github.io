/* MarCo service worker: shows push alerts for staff. */
self.addEventListener('push',e=>{let d={};try{d=e.data.json()}catch(x){d={title:'MarCo',body:e.data&&e.data.text()}}e.waitUntil(self.registration.showNotification(d.title||'MarCo',{body:d.body||'',data:{url:d.url||'/'},icon:'/icon.png',badge:'/icon.png'}))});
self.addEventListener('notificationclick',e=>{e.notification.close();const url=(e.notification.data&&e.notification.data.url)||'/';e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(list=>{for(const c of list){if(c.url.startsWith(self.location.origin)){c.focus();c.navigate(url);return}}return clients.openWindow(url)}))});
self.addEventListener('install',()=>self.skipWaiting());self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
