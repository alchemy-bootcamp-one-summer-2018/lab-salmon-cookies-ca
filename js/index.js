'use strict';

(function(module){
    // let sayHello = module.sayHello;
    let App = module.App;
    let root = document.getElementById('root');

    let app = new App();
    let dom = app.render();
    root.appendChild(dom);
    // sayHello();

})(window.module = window.module || {});