self.addEventListener('install', function(e){
    e.waitUntil(
        caches.open('lista').then(function(cache){
            return cache.addAll ([
                './',
                './registro2SW.js',
                "./apple-icon-144x144-seochecker-manifest-2524.jpg"
            ]);
        })
    );
});

self.addEventListener('fetch' , function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            // Cache hit - return response
            if (response) {
                return response;
            }
            return fetch(event.request);
        }
        )
    );
});
