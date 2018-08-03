'use strict';

(function(module){

    let stores;
        
    let json = window.localStorage.getItem('stores');

    if(json && json !== 'undefined') {
        fruits = JSON.parse(json);
    }
    else {
        createStores();
    }

    function createStores() {
        stores = [{
            name: 

        }];

    } 
 
}
);