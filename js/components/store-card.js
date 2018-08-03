'use strict';
(function(module){

    let html = module.html;
   
    let template = function() {//below will go one store's data  
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