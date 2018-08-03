'use strict';

(function(module) {

    let html = module.html;
    let StoreTable = module.StoreTable

    class App {
        render() {
            return html`        
            <header>
                <h2>Our Partners</h2>
            </header>
            
            <main></main>
        `;
        }
    }

    module.app = App;

})(window.module = window.module || {});