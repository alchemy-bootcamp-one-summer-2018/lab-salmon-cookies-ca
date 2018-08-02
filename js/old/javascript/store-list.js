

'use strict';

(function(module){
    let stores = module.stores;
    let stats = module.stats;
    let lastStores = stores.slice();
    let toDOM = module.toDOM;
    let html = module.html;



    let thead = document.getElementById('stores-thead');
    let tbody = document.getElementById('stores-tbody');
    let tfoot = document.getElementById('stores-tfoot');

    let renderRow = function(row) {
        return toDOM(html`        
            <tr>
                <td>${row.name}</td>
                <td>${row.cookiesByHour[0]}</td>
                <td>${row.cookiesByHour[1]}</td>
                <td>${row.cookiesByHour[2]}</td>
                <td>${row.cookiesByHour[3]}</td>
                <td>${row.cookiesByHour[4]}</td>
                <td>${row.cookiesByHour[5]}</td>
                <td>${row.cookiesByHour[6]}</td>
                <td>${row.cookiesByHour[7]}</td>
                <td>${row.cookiesByHour[8]}</td>
                <td>${row.cookiesByHour[9]}</td>
                <td>${row.cookiesByHour[10]}</td>
                <td>${row.cookiesByHour[11]}</td>
                <td>${row.cookiesByHour[12]}</td>
                <td class="end-totals" style="background: navy; color: rgba(192, 192, 192, 1)">
                    ${row.cookiesPerDay}
                </td>
            </tr>
        `);
    };


    let renderHeader = function () {
        return toDOM(html`        
            <tr>
                <th>Locations</th>
                <th>6am</th>
                <th>7am</th>
                <th>9am</th>
                <th>10am</th>
                <th>11am</th>
                <th>12pm</th>
                <th>1pm</th>
                <th>2pm</th>
                <th>3pm</th>
                <th>4pm</th>
                <th>5pm</th>
                <th>6pm</th>
                <th>7pm</th>
                <th>Location Totals</th>
            </tr>
        `);
    };

    let staticHeader = renderHeader();
    thead.appendChild(staticHeader);


    function htmlBuilder(store, htmlElement) {
        let dom = renderRow(store);
        // make sure to make this htmlElement instead of just 'tbody'
        htmlElement.appendChild(dom);
    }

    function updateStoreList() {
    // loop through and find any new fruit and render them
        
        // This is a paramaterization... I will temporarily hardcode this.
        // let storesLength = stores.length;
        // tbody.children[storesLength].remove()

        tbody.children[5].remove();

        for(let i = 0; i < stores.length; i++) {
            let store = stores[i];
            if(lastStores.includes(store)) continue;
            htmlBuilder(store, tbody);
        }

        htmlBuilder(stats, tfoot);
    }

    
    function htmlInit(containerArray) {
        for(let i = 0; i < containerArray.length; i++) {
            htmlBuilder(containerArray[i], tbody);
        }
    }

    htmlInit(stores);
    htmlInit(stats);

    module.updateStoreList = updateStoreList;

})(window.module = window.module || {});















