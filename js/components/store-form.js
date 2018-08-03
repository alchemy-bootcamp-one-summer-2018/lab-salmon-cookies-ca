'use strict';

(function(module)) {
    let html = module.html;
    let template = function()
    return html`
        <section>
            <h2>Add A Store!</h2>
            <form>
                <p>* is required</p
                <p>
                    <label>
                        Name:
                        <input name="name" required><sup>*</sup>
                    </label>
                    </p>

                    <p>
                        <label>
                            Minimum Customers Per Hour:
                            <input name="Minimum" required><sup>*</sup>
                        </label>
                    </p>

                    <p>
                        <label>
                            Maximum Customers Per Hour:
                            <input name="Maximum" requires><sup>*</sup>
                        </label>
                    </p>

                    <p>
                        <label>
                            Average Cookies Sold Per Hour:
                            <input name="Average" required><sup>*</sup>
                        </label>
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
                let dom = template(this.fruit);

                let form = dom.querySelector('form');

                form.addEventListener('submit', (event))
                    event.preventDefault();

                    let elements = form.elements;

                    let fruit = {
                        name: elements.name.value,
                        minimum: elements.minimum.value,
                        maximum: elements.maximum.value,
                        
                    }
            }

        }


