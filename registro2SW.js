if('serviceWorker' in navigator)
{
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('./SW2.js').then(function(registration) {
            console.log('Registro exitoso', registration.scope);
        },function(err){
            console.log('no se pudo registrar el service worker',err);
        });
    });
}

