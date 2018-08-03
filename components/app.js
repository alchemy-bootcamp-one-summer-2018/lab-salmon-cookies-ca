'use strict';

(function(module) {

    let html = module.html;
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
    
            let main = dom.querySelector('main');
            let pikesPlace = {
                name:'Pike Place Market',
                min: 23,
                max: 65,
                avg: 6,
                key:'pike',
                total: 0
            };
            let storeEntry = new StoreEntry ({
                store: pikesPlace

            });
            main.appendChild(storeEntry.render());
            return dom;
        }
    
    }

    module.App = App;

})(window.module = window.module || {});




   


   