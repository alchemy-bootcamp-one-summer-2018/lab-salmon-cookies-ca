'use strict';

(function(module) {
    let html = module.html;

    // creates hourly tallies (column tallies)
    let hourlyTally = function(stores){
        // Create an empty object called columnTotals that will store each column's total
        let columnTotals = {};
        for(let j = 0; j < 14; j++){
            columnTotals[j] = 0;
        }

        // loop through each row (store) and update your column tally
        for(let j = 0; j < stores.length; j++){
            let store = stores[j];
            // create hourly totals
            for(let i = 0; i < store['hours'].length; i++)
            {
                let cookies = store['hours'][i];
                columnTotals[i] += cookies;
            }
        }
        return columnTotals;
    };

    let template = function(stores) {
        //create column tallies
        let columnTotals = hourlyTally(stores);

        // label of footer row
        let rowString = '<tr> <td>' + 'Hourly Totals for All Locations' + '</td>';

        // create a counter variable for all of the column totals
        let all_store_all_hours_total = 0;

        // fill in hourly (column) totals for columns 1-14
        for(let i = 0; i < 14; i++){
            let cookies = columnTotals[i];
            rowString += '<td>' + cookies + '</td>';
            all_store_all_hours_total += cookies;
        }
        // put final total in bottom right
        rowString += '<td>' + all_store_all_hours_total + '</td> </tr>';

        return html`${rowString}`;
    };

    class Footer {
        constructor(props) {
            this.stores = props.stores;
        }

        render() {
            // create footer row
            let dom = template(this.stores);
            return dom;
        }
    }

    module.Footer = Footer;

})(window.module = window.module || {});