'use strict';

(function(module) {
    let html = module.html;
    let template = function() {
        return html`        
            <section>
                <h2>Add A Store</h2>
                <form id="add-store">
        <p>
            <label>
                Name:
                <input name="name" required>
            </label>
        </p>

        <p>
            <label>
                Min:
                <input name="min" required>
            </label>
        </p>

        <p>
            <label>
                Max:
                <input name="max" required>
            </label>
        </p>

        <p>
            <label>
                Average:
                <input name="average" required>
            </label>
        </p>

        <p>
            <label>
                 Key:
                <input name="key" required>
            </label>
        </p>
        <p>
            <label>
               DailyTotal:
                <input name="DailyTotal" required>
            </label>
        </p>
        <p>
            <button>Add</button>
        </p>
        <p class="error"></p>
    </form>
            </section>
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
                    min: elements.min.value,
                    max: elements.max.value,
                    average: elements.average.value,
                    key: elements.key.value,
                    DailyTotal: elements.DailyTotal.value,
                   
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