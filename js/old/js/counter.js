'use strict';

(function(module){
    var stores = module.stores;
    var countSpan = document.getElementById('store-count');

    function updateCounter() {
        countSpan.textContent = stores.length;
    }

    updateCounter();

    module.updateCounter = updateCounter;

})(window.module = window.module || {});