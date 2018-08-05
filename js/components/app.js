'use strict'; 


//LOAD DATA
//CREATE A STORE LIST AND FORM
//UPDATE LIST IF NEEDED

(function(module){

    let html = module.html;
    let StoreTable = module.StoreTable;
    let storeApi = module.storeApi;
    let StoreForm = module.StoreForm;
    // let totals = module.totals;

    let template = function() {//header + main
        return html `
            <div id="header">
                <img id="fishpic" src="https://github.com/acrankin/lab-salmon-cookie/blob/master/salmon.png?raw=true">
            <h2>Pat's Salmon Cookies</h2>
            </div>
            
            <main ></main>
        `;
    };

    class App {
        render() {
            let dom = template();
            
            let main = dom.querySelector('main');
           
            
            let stores = storeApi.load();
            let storeTable = new StoreTable({  
                stores: stores
            });

            console.log(storeTable);

            let storeForm = new StoreForm({
                onAdd: (store) => {
                    storeApi.add(store);
                    // storeTable.update({
                    //     stores: stores
                    // });
                }
            });
            
            console.log(storeForm);
            
            
            main.appendChild(storeForm.render());
            main.appendChild(storeTable.render());

            
            return dom;
        }
    }

    module.App = App;
    

})(window.module = window.module || {});