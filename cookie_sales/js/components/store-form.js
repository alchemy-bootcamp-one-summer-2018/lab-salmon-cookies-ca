/* global createHourlyInfo */
'use strict';

(function(module) {
    let html = module.html;

    // form structure
    let template = function() {
        return html`        
        <div id="new-store"><h2>Add a new store! </h2>
          <form id="add-store">
              <p> Location name: </p>
              <input type="text" name="location" required>

              <p>Minimum Customers Per Hour: </p>
              <input type="text" name="min" required>

              <p>Maximum Customers Per Hour:</p>
              <input type="text" name="max" required>

              <p>Average Cookies Per Sale:</p>
              <input type="text" name="avg" required>

              <button id="submit"> Click here to add </button>

          </form><br>

          <p id = "form-error" class="error"></p>

        </div>
        `;
    };

    class StoreForm {
        constructor(props) {
            this.onAdd = props.onAdd;
        }

        render() {
            let dom = template();

            let form = dom.querySelector('form');
            let error = dom.querySelector('p.error');

            // listen for form submission
            form.addEventListener('submit', (event) => {
                // #1 Prevent default posting of the form
                event.preventDefault();

                // #2 Gather up data
                let elements = form.elements;

                let store = {
                    location: elements.location.value,
                    max_cust: elements.max.value,
                    min_cust: elements.min.value,
                    avg_cookies: elements.avg.value,
                    key: elements.location.value
                };
                // give the store hourly cookie values
                store = createHourlyInfo(store);

                // #3 Call action
                try {
                    this.onAdd(store);
                    // #4 Process success or failure
                    form.reset();
                    document.activeElement.blur();
                }
                catch (err) {
                    // #4 Process success or failure
                    console.log(err);
                    error.textContent = err.message;
                }

            });

            return dom;
        }
    }

    module.StoreForm = StoreForm;

})(window.module = window.module || {});