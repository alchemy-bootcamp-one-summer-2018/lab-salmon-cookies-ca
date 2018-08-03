'use strict';

(function(module) {
    let html = module.html;
    let storeList = module.storeList;

    // function fn() {
    //     let test = 'hello world';
    //     console.log('test:', test);
    // }

    // fn();

    let template = function() {
        return html`
            <header>
                <h1>Sales</h1>
            </header>

            <main></main>
        `;
    };

    class App {
        render() {
            let dom = template();

            // let main = dom.querySelector('main');

            // let stores = storeApi.load();

            // let storeList = new storeList({
            //     stores: stores
            // });
            // main.appendChild(storeList.render());

            return dom;
        }
    }

    module.App = App;

})(window.module = window.module || {});