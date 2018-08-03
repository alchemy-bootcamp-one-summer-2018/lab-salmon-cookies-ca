'use strict';

(function(module) {

    let html = module.html;

    let template = function() {
        return html`
            <section>
                <h2>Add a Store</h2>
                <form id="store-form" class="store-form">
                    <fieldset>
                        <legend>Enter Store Details</legend>
                    
                        <p class="question">Location Name</p>
                        <input class="text" type="text" name="name" placeholder="Enter location" value="Springfield" required/>
                    
                        <p class="question">Minimum Customers Per Hour</p>
                        <input class="text" type="number" name="custPerHourMin" placeholder="Enter minimum customers" value="5" required/>
                    
                        <p class="question">Maximum Customers Per Hour</p>
                        <input class="text" type="number" name="custPerHourMax" placeholder="Enter maximum customers" value="100" required/>
                    
                        <p class="question">Average Cookies Per Sale</p>
                        <input class="text" type="number" name="cookiesPerCust" placeholder="Enter average cookies per sale" value="3" required/>
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

        render() {
            let dom = template();




            return dom;


        }


    }



    module.StoreForm = StoreForm;

})(window.module = window.module || {});