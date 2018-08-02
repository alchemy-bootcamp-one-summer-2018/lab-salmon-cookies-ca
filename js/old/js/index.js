'use strict';

(function(module){
    
    let addStore = module.addStore;
    let initStoreForm = module.initStoreForm;

    let updateCounter = module.updateCounter;
    let updateStoreList = module.updateStoreList;

    initStoreForm(function onStoreAdded(fruit) {
        addStore(fruit);
        updateCounter();
        updateStoreList();
    });

})(window.module = window.module || {});

