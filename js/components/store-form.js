'use strict';

(function(module){

    let html = module.html;

    let template = () => {
        return html`
            <section>
                <h2>Add a Store</h2>
                <form id="store-form" class="store-form">
                    <fieldset>
                        <legend>Enter Store Details</legend>
                
                        <p class="question">Location Name</p>
                        <input class="text" type="text" name="name" placeholder="Enter location" required/>
                
                        <p class="question">Minimum Customers Per Hour</p>
                        <input class="text" type="number" name="custPerHourMin" placeholder="Enter minimum customers" required/>
                
                        <p class="question">Maximum Customers Per Hour</p>
                        <input class="text" type="number" name="custPerHourMax" placeholder="Enter maximum customers" required/>
                
                        <p class="question">Average Cookies Per Sale</p>
                        <input class="text" type="number" name="cookiesPerCust" placeholder="Enter average cookies per sale" required/>
                    </fieldset>
                
                    <div>
                        <button id="sales-submit" type="submit">Add Store</button>
                        <button id="sales-reset" type="reset">Start Over</button>
                    </div>
                
                    <p id="form-error" class="error"></p>
                </form>
            </section>
        `;
    };

    class StoreForm {
        constructor(props) {
            this.onAdd = props.onAdd;
        }

        render() {
            let dom = template();
            let form = dom.querySelector('form');

            form.addEventListener('submit', (event) => {
                event.preventDefault();

                let inputs = event.target.querySelectorAll('input');

                let data = [];

                for(let i = 0; i < inputs.length; i++) {
                    let store = inputs[i].value;
                    data.push(store);
                }

                this.store = {
                    name: data[0],
                    custPerHourMin: data[1],
                    custPerHourMax: data[2],
                    cookiesPerCust: data[3],
                    cookiesByHour: []
                };

                this.onAdd(this.store);
            });

            return dom;
        }
    }

    module.StoreForm = StoreForm;

})(window.module = window.module || {});