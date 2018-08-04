'use strict';
(function(module){
    //THINK ABOUT CHANGING ALL THIS TO STORE ROW
    

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
    
    class StoreRow {
        // constructor(props) {
        //     this.store = props.store;
        // }

        render() {
            //NEEDS THE INDIVIDUAL STORE DATA IN THE CONSTRUCTOR
            //THAT BIG LONG LIST OF TDS IN THE OLD STORE-TABLE.JS
            let dom = template();

            return dom;
        }    
    }
    module.StoreRow = StoreRow;

})(window.module = window.module || {});