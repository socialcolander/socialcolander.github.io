import debugModule from 'debug';

// cos browsersync also use debug library
window.debug = name => debugModule('_' + name);
localStorage.debug = '_*'

;['forEach', 'map', 'filter', 'reduce', 'reduceRight', 'every', 'some'].forEach(p =>
    NodeList.prototype[p] = HTMLCollection.prototype[p] = Array.prototype[p]
)
