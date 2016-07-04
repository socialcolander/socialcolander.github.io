import debugModule from 'debug';
window.debug = name => debugModule('sc:' + name);

localStorage.debug = 'sc:*'
window.$ = document.querySelector.bind(document)
window.$$ = document.querySelectorAll.bind(document)

Element.prototype.find = Element.prototype.querySelector
Element.prototype.findAll = Element.prototype.querySelectorAll

;['forEach', 'map', 'filter', 'reduce', 'reduceRight', 'every', 'some'].forEach(p =>
    NodeList.prototype[p] = HTMLCollection.prototype[p] = Array.prototype[p]
)
