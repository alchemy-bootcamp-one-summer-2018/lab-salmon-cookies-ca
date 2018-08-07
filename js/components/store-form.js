'use strict';
(function(module){

    let html = module.html;

    let template = function() {
        return html`
            <main>
                <form>
                    <p>
                        <label>Location Name:</label><input id="name" type="text">
                    </p>
                    <p>
                        <label>Minimum Customers Per Hour</label><input id="minCustomers" type="number">
                    </p>
                    <p>
                        <label>Maximum Customers Per Hour</label><input id="maxCustomers" type="number">
                    </p>
                    <p>
                        <label>Average Cookies Per Sale</label><input id="avgSale" type="number">
                    </p>
                    <p>
                        <button>Add a Store</button>
                    </p>
                    <p class="error"></p>
                </form>
            </main>
        `;
    };

    class StoreForm {
        constructor(props) {
            this.onAdd = props.onAdd;
        }

        render(){
            let dom = template();
            let form = dom.querySelector('form');
            let error = dom.querySelector('p.error');
            
            form.addEventListener('submit', (event) => {
               
                event.preventDefault();
                
                let elements = form.elements;

                let store = {
                    name: elements.name.value,
                    minCustomers: elements.minCustomers.value,
                    maxCustomers: elements.maxCustomers.value,
                    avgSale: elements.avgSale.value,
                    cookiesSoldPerHour: 14 //PUT THE RANDOM MATH IN HERE
                };
                console.log(store);

                try {
                    error.textContent = '';
                    this.onAdd(store);
                    form.reset();
                }
                catch(err) {
                    error.textContent = err.message;
                }
            });

            return dom;
        }
    }
    module.StoreForm = StoreForm;

})(window.module = window.module || {});