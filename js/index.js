'use strict';

(function(module) {

    let App = module.App;
    let app = new App();

    let root = document.getElementById('root');

    let dom = app.render();
    root.appendChild(dom);

})(window.module = window.module || {});