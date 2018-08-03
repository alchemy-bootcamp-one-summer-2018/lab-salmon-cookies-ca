'use strict';

(function(module) {

    let html = module.html;
    let StoreList = module.StoreList;
    let StoreEntry = module.StoreEntry;


    let template = function() {

        return html`
            <header> 
                <h1>This is Pat's Sales </h1>
                <h2></h2>
             </header>

            <main></main>

            `;
    };


    class App {
        render() {

            let dom = template();

            // let main = dom.querySelector('main');
            // let storeList = new StoreList ({
            //     stores: stores
            // });
            
            let store = [
                'wooo'
            ];


            // main.appendChild(storeList.render());

            return dom;
        }
    
    }

    module.App = App;

})(window.module = window.module || {});


//hello world
// let test = 'Hello World!';

// console.log('hello world', test);


   


   