'use strict';

(function(module) {

    let html = module.html;

    class App {
        render() {
            return html`        
            <header>
                <h2>I SAID HELLO WORLD</h2>
            </header>
            
            <main></main>
        `;
        }
    }

    module.app = App;

})(window.module = window.module || {});