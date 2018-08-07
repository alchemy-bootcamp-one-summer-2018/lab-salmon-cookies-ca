'use strict';

(function(module) {
    let html = module.html;
    let template = function() {
        return html `
            <form id="add-store">
            <p>Location Name</p>
            <input name="name" type="text" required><sup>*</sup>
            <p>Minimum Customers Per Hour</p>
            <input name="min" type="text" required><sup>*</sup>
            <p>Maximum Customers Per Hour</p>
            <input name="max" type="text" required><sup>*</sup>
            <p>Average Cookies Per Sale</p>
            <input name="avg" type="text" required><sup>*</sup>

            <div id="submit-button">
                <button id="form-button">Click Here To Add!</button>
            </div>

            <p id="form-error" class="error"></p>
        </form>
        `;
    };

    class StoreForm {
        constructor(props) {
            this.onAdd = props.onAdd;
        }
        
        render() {
            let dom = template(this.store);

            let form = dom.querySelector('form');

            form.addEventListener('submit', (event) => {
                // #1 Prevent default posting of the form
                event.preventDefault();
        
                // #2 Gather up data
                let elements = form.elements;
        
                let store = {
                    name: elements.name.value,
                    minCust: elements.min.value,
                    maxCust: elements.max.value,
                    avgCookies: elements.avg.value
                };
        
                // #3 Call action
                try {
                    // error.textContent = '';
                    this.onAdd(store);

                    // #4 Process success or failure
                    // form.reset();
                    // document.activeElement.blur();
                }
                catch(err) {
                    // #4 Process success or failure
                    // error.textContent = err.message;
                }
        
            });

            return dom;
        }
    }

    module.StoreForm = StoreForm;
   
   
})(window.module = window.module || {});