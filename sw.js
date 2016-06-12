importScripts('../bower_components/sw-toolbox/sw-toolbox.js');

toolbox.precache(['/writing-tutor/web/index.html']);

toolbox.router.get('/writing-tutor/web/index.html', toolbox.cacheFirst);
