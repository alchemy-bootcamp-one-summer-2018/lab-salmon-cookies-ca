'use strict';

(function(module) {

    let html = module.html;
    let StoreForm = module.StoreForm;
    let StoreCounter = module.StoreCounter;
    let StoreTable = module.StoreTable;
    let storeAPI = module.storeAPI;


    let template = function() {
        return html`        
            <header class="header-container">
                <a class="logo-container" href="/index.html" title="Salmon Industries - Home">
                    <img src="/images/salmon.png" width="180">
                    <h1 class="head-title">Salmon Industries</h1>
                </a>
                <nav>
                    <ul>
                        <li>
                            <a href="/index.html" title="Home">Home</a>
                        </li>
                        <li>
                            <a class="active" href="/pages/sales.html" title="Sales">Sales</a>
                        </li>
                        <li>
                            <a href="/pages/products.html" title="Product Gallery">Product Gallery</a>
                        </li>
                        <li>
                            <a href="/pages/about.html" title="Our story">Our Story</a>
                        </li>
                        <li>
                            <a href="/pages/contact.html" title="Contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            
                <p class="core-info">
                    <br> 12345 Main St
                    <br> Portland, OR 97220
                    <br> 12:02am - 11:58pm
                    <br> (877) GET - FISH
                    <br>
                    <a style="color: rgba(239, 132, 105, 1);" href="https://www.youtube.com/watch?v=i9SSOWORzw4">somethingisfishy@aol.com</a>
                </p>
            </header>
            
                
            
            
            <main>
                <h2 style="font-size: 46px;">Our Partners</h2>
            </main>

            <footer>
                <img src="/images/salmon-icon.png" width="72">
                <p> &copy; 2018 Salmon Industries - All Rights Reserved</p>
            </footer>
        `;
    };
    
    class App {
        render() {
            let dom = template();
            let main = dom.querySelector('main');
            let stores = storeAPI.read();
            
            
            let storeForm = new StoreForm({
                onAdd: (store) => {
                    storeAPI.create(store);
                    storeTable.update({
                        stores: stores
                    });
                }
            });
            let storeCounter = new StoreCounter(
                {
                    count: storeAPI.read().length,
                }
            );
            let storeTable = new StoreTable(
                {
                    stores: stores,
                }
            );

            main.appendChild(storeForm.render());
            main.appendChild(storeCounter.render());
            main.appendChild(storeTable.render());
            
            return dom;

        }
    }
    
    module.App = App;

}(window.module = window.module || {}));