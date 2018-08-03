'use strict';

(function(module) {
    let html = module.html;
    let StoreList = module.StoreList;
 

    let stores = [{
        name: 'Pike Place Market',
        minCust: 23,
        maxCust: 65,
        avgCookies: 6
    }, {
        name: 'SeaTac Airport',
        minCust: 3,
        maxCust: 24,
        avgCookies: 1
    }, {
        name: 'Seattle Center',
        minCust: 11,
        maxCust: 38,
        avgCookies: 4
    }, {
        name: 'Capitol Hill',
        minCust: 20,
        maxCust: 38,
        avgCookies: 2
    }, {
        name: 'Alki',
        minCust: 2,
        maxCust: 16,
        avgCookies: 5
    }];

    let template = function() {
        return html`
        <header>
            <h1>Pat's Salmon Cookie Co.</h1>
        </header>
        <main></main>
        `;
    };
    
    class App {
        render() {
            let dom = template();

            let main = document.querySelector('main');
            let storeList = new StoreList();

            main.appendChild(storeList.render());
            
            return dom;
        }
    }

    module.App = App

})(window.module = window.module || {});