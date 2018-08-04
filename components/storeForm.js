
'use strict';

(function(module) {
    let html = module.html;

    let template = function() {

        return html`

        <p>Add New Store To The Table</p>

        <form action="click">
        
        <p><input class="input" name="location" label="location"></p>
        <p><input class="input" name="min-customer" label="min-customer"></p>
        <p><input class="input" name="max-customer" label="max-customer"></p>
        <p><input class="input" name="average-sale" label="average-sale"></p>
     
        <input id="form-btn" type="submit" value="Calculate">
        </form> 
   
        `};

    class StoreForm {
        constructor(props) {
            this.onAdd = props.onAdd;
          
        }

        render() {
            let dom = template();
            return dom;

            let form = dom.querySelector('form');
        }
    
    }

module.StoreForm = StoreForm;

})(window.module = window.module || {});


// only needs onadd once user hits sumbit | store= location:element.location 
                                                //min-cust
                                               // max-cust
                                                   // Cooksperhour [] =[5,6,]

