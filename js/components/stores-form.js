'use strict';

(function(module) {
    let html = module.html;
    let template = function() {
        return html`
        <section>
            <h2>Add a store</h2>
            <form>
                <p>* is required</p>
                <p>
                    <label>
                       Name:
                     <input name="name" required><sup>*</sup>
                    </label>
                </p>
                
                <p>Minimum Customer Per Hour</p>
                <input type="text" name="Min" required>

                <p>Maximum Customer Per Hour</p>
                <input type="text" name="Max" required>

                <p>Average Cookies Per Hour</p>
                <input type="text" name="Avg" required>

                <p>
                    <button>Add</button>
                </p>

            </form>
            <p class="error"></p>
        </section>
   `; 
    };

    class StoresForm {
        constructor(props) {
            this.onAdd = props.onAdd;
        }

        render() {
            let dom = template(this.store);

            let form = dom.querySelector('form');

            form.addEventListener('submit', (event) => {

                event.preventDefault();
            
                let elements = form.elements;

                let store = {
                    name: elements.name.value,
                    minCust: elements.min.value,
                    maxCust: elements.max.value,
                    avgCookies: elements.avg.value,
                    key: elements.name.value
                };

                try {
                    this.onAdd(store);

                    form.reset();
                    document.activeElement.blur();
                }
                catch(err) {
                    console.log(err);
                    // error.textContent = err.message;
                }
            });
            return dom;
        }
    }

    module.StoresForm = StoresForm;
})(window.module = window.module || {});