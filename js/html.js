'use strict';

(function(module) {

    function toDOM(html) {
        var template = document.createElement('template');
        template.innerHTML = html;
        return template.content;
    }

    function html(strings, ...values) {
        let htmlString = String.raw(strings, ...values);
        return toDOM(htmlString);
    }

    module.html = html;

})(window.module = window.module || {});