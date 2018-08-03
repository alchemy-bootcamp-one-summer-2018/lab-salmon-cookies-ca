'use strict';

(function(module) {
    let html = module.html;
    let storeApi = module.storeApi; //loads, adds, removes stores
    let StoreList = module.StoreList; //keeps track of stores & new additions, in addition to rendering everything
    let StoreForm = module.StoreForm; //form functionality

    // header of html file
    let template = function() {
        return html`
        <div class="wrapper">
            <header>
                <h1> Salmon Cookies</h1>
                <nav>
                    <ul>
                        <li><a href=".." class="current">home</a></li> 
                        <li><a href="">menu</a></li>
                        <li><a href="">about</a></li>
                        <li><a href="">contact</a></li>
                        <li><a href="">data</a></li>
                    </ul> 
                </nav>
            </header>
            <div class = "company-name">
                    Pat's Salmon Cookies Sales Data
            </div>
            <main></main>
            <footer>
                &copy; 2018 Salmon Cookies
            </footer>
        </div>
        `;
    };

    // prints table data to screen and checks for updates to table
    class App {
        render() {
            let dom = template();

            let main = dom.querySelector('main');

            let stores = storeApi.load();

            let storeList = new StoreList({
                stores: stores,
                onRemove: (store) => {
                    storeApi.remove(store);
                    storeList.update({
                        stores: stores
                    });
                }
            });

            let storeForm = new StoreForm({
                onAdd: function(store) {
                    storeApi.add(store);
                    storeList.update({
                        stores: stores
                    });
                }
            });

            // adds form and table data to screen
            main.appendChild(storeForm.render());
            main.appendChild(storeList.render());

            return dom;
        }
    }

    module.App = App;

})(window.module = window.module || {});