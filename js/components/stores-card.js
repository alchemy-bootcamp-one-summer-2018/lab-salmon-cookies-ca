'use strict';

(function(module) {
    let html = module.html;


    let template = function(store) {

        return html`
            <tbody>
                <tr>
                <td>${store.name}</td>
                <td>${store.hours[0]}</td>
                <td>${store.hours[1]}</td>
                <td>${store.hours[2]}</td>
                <td>${store.hours[3]}</td>
                <td>${store.hours[4]}</td>
                <td>${store.hours[5]}</td>
                <td>${store.hours[6]}</td>
                <td>${store.hours[7]}</td>
                <td>${store.hours[8]}</td>
                <td>${store.hours[9]}</td>
                <td>${store.hours[10]}</td>
                <td>${store.hours[11]}</td>
                <td>${store.hours[12]}</td>
                <td>${store.hours[13]}</td>
                <td>${store.hours[14]}</td>
                <td>${store.dailyTotal}</td>
                </tr>
            </tbody>
        `;
    };
    class StoresCard {
        constructor(props) {
            this.store = props.store;
        }
        render() {
            let dom = template(this.store);
            return dom;
        }
    }
    
    module.StoresCard = StoresCard;

})(window.module = window.module || {});




