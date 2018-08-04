
'use strict';

(function(module) {
    let html = module.html;

    let template = function(){

        return html`

        <p>Add New Store To The Table</p>
        <form>
        <p><input class="input" name="store-location" label="Store Location"></p>
        <p><input class="input" name="min-customer" label="Minimum Customer"></p>
        <p><input class="input" name="max-customer" label="Max Customer"></p>
        <p><input class="input" name="avg-sale" label="Average Sale"></p>
     
        <button class="form-btn" type="submit">Calculate </button>
        </form> 
   
        `;
    };

    class StoreForm {
        constructor(props) {
            this.onAdd = props.onAdd; 
        }

        render() {
            let dom = template();

            let form = dom.querySelector('form');

            //trying to explain this.
            form.addEventListener ('submit', (event) => {
                event.preventDefault();

                let elements= form.elements; 
                
                let store = {
                location: elements.location.value,
                custMax: elements.max.value,
                custMin: elements.min.value,
                avgCookies: elements.avg.value
                };

            store = hourlyStoreData(store);

            try {
                this.onAdd(store);
                form.reset();
                }

            });

            return dom;
        }
    
    }

    module.StoreForm = StoreForm;

})(window.module = window.module || {});
