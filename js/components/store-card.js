'use strict';
(function(module){

    let html = module.html;
   
    let template = function() {
        return html`
            <tr>
            <td>There's</td>
            <td>always </td>
            <td>money </td>
            <td>in</td>
            <td>the</td>
            <td>banana</td>
            <td>stand</td>
            </tr>
        `;
    };
    // build out each table row, representing a single store and its data

    class StoreCard {
        // constructor(props) {
        //     this.store = props.store;
        // }

        render() {
            let dom = template();
            
            return dom;
        }    
    }
    module.StoreCard = StoreCard;

})(window.module = window.module || {});