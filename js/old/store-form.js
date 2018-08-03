

'use strict';

(function(module) {
    let form = document.getElementById('store-form');
    let error = document.getElementById('form-error');
    let elements = form.elements;

    function initStoreForm(onStoreAdded) {

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            let store = {
                name: elements.name.value,
                custPerHourMin: parseFloat(elements.custPerHourMin.value),
                custPerHourMax: parseFloat(elements.custPerHourMax.value),
                cookiesPerCust: parseFloat(elements.cookiesPerCust.value),
            };

            try {
                error.textContent = '';
                onStoreAdded(store);
                form.reset();
                document.activeElement.blur();
            }
            catch (err) {
                error.textContent = err.message;
            }

        });
        
    }

    module.initStoreForm = initStoreForm;

})(window.module = window.module || {});
