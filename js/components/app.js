'use strict';
(function(module){

    // function sayHello(){
    //     console.log('hello world!');
    // }
    let html = module.html;

    let template = function() {
        return html `
            <header>
                <h1> Hello World!</h1>
            </header>

            <main>oh god it burns</main>
        `;
    };

    template();
    class App {
        render() {
            let dom = template();
            return dom;
        }
    }

    module.App = App;
    // module.sayHello = sayHello;

})(window.module = window.module || {});