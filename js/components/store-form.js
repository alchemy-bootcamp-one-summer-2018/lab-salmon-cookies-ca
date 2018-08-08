'use strict';

(function(module) {

    let html = module.html;

    let template = function() {
        return html `
            <section>
            <h2>Add a location:</h2>
            <form id="add-store">
                <p>* is required</p>
                <p>
                    <label>
                        Location:
                        <input name="location" required><sup>*</sup>
                    </label>
                </p>

                <p>
                    <label>
                        Minimum Customers Per Hour:
                        <input name="min" required><sup>*</sup>
                    </label>
                </p>

                <p>
                    <label>
                        Maximum Customers Per Hour:
                        <input name="max" required><sup>*</sup>
                    </label>
                </p>

                <p>
                    <label>
                        Average Cookies Sold Per Hour:
                        <input name="avgCookiesSoldPerHour" required><sup>*</sup>
                    </label>
                </p>

                <p>
                    <button>Add</button>
                </p>

                <p id="form-error" class="error"></p>      
            </form>
        </section>
        `;
    };

    // what is happening here??
    class StoreForm {
        constructor(props) {
            this.onStoreAdd = props.onAdd;
        }

        render() {
            let dom = template();
            let form = dom.querySelector('form');
            let elements = form.elements;
            let error = dom.querySelector('p.error');

            form.addEventListener('submit', (event) =>{
                event.preventDefault();

                console.log('input', elements.location.value);

                //is this ok?  i copied it from yesterdayyyyy
                let store = {
                    location: elements.location.value,
                    min: elements.min.value,
                    max: elements.max.value,
                    avgCookiesSoldPerHour: elements.avgCookiesSoldPerHour.value
                };

                console.log('store:', store);

                try {
                    error.textContent = '';
                    this.onStoreAdd(store);
                    form.reset();
                    document.activeElement.getBoundingClientRect();
                }
                catch (err) {
                    error.textContent = err.message;
                }
            });

            return dom;
        }
    }

    module.StoreForm = StoreForm;
    
})(window.module = window.module || {});