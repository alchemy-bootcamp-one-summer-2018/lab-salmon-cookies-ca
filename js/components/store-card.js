'use strict';

(function(module) {
    let html = module.html;

    let template = function(store) {

        return html`
        <tr>
        <td>test</td>
        <td>test</td>
        <td>test</td>
        <td>test</td>
        <td>test</td>
        <td>test</td>
        <td>test</td>
        <td>test</td>
        <td>test</td>
        <td>test</td>
        <td>test</td>
        <td>test</td>
        <td>test</td>
        <td>test</td>
        <td>test</td>
        <td>test</td>
        <td>test</td>

    </tr>
        `;
    };

    class StoreRow {
        constructor(props) {
            this.store = props.store;
        }
        
        render() {
            let dom = template(this.store);
            return dom;
        }
    }

    module.StoreRow = StoreRow;

})(window.module = window.module || {});