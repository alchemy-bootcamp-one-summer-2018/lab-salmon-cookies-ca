'use strict';

(function(module) {
    let html = module.html;
    let storeApi = module.storeApi;
    let StoreList = module.StoreList;
    let StoreForm = module.StoreForm;

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

    class App {
        render() {
            let dom = template();

            let main = dom.querySelector('main');

            let stores = storeApi.load();

            let storeList = new StoreList({
                stores: stores
            });

            let storeForm = new StoreForm({
                onAdd: function(store) {
                    storeApi.add(store);
                    storeList.update({
                        stores: stores
                    });
                }
            });

            main.appendChild(storeForm.render());
            main.appendChild(storeList.render());

            return dom;
        }
    }

    module.App = App;

})(window.module = window.module || {});