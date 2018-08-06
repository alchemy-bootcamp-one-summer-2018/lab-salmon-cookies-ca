'use strict';

(function(module) {

    let html = module.html;

    let template = function() {
            return html`
                <header>
                    <h1>hello world</h1>
                </header>

                <main></main>
            `;

    };

    class App {
        render() {
            let dom = template();

            return dom;
        }
    }

    module.App = App;



})(window.module = window.module || {});