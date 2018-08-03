'use strict';

(function(module) {

    let App = module.app;
    let root = document.getElementById('root');

    let app = new App();
    let dom = app.render();

    root.appendChild(dom);

})(window.module = window.module || {});