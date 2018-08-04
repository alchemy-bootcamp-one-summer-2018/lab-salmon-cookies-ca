
'use strict';

(function(module) {
    let html = module.html;

    let template = function(){

        return html`

        <form>
        <p><input class="input" name="location" label="Store Location"></p>
        <p><input class="input" name="min" label="Minimum Customer"></p>
        <p><input class="input" name="max" label="Max Customer"></p>
        <p><input class="input" name="avg" label="Average Sale"></p>
     
        <button id="submit" type="submit"> Calculate </button>
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

            form.addEventListener ('submit',(event) => {
                
             event.preventDefault();

            let elements= form.elements; 
                
                let store = {
                    location: elements.location.value,
                    max: elements.max.value,
                    min: elements.min.value,
                    avg: elements.avg.value,
                    key: elements.location.value
                };

            //     store = hourlyStoreTotals(store);

            //     try {
            //         this.onAdd(store);
            //         form.reset();
            //     
            //     }
            });
           
            

            return dom;
        }
    }

    module.StoreForm = StoreForm;

})(window.module = window.module || {});
