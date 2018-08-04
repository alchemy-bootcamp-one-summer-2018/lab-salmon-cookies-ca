'use strict'; 


//LOAD DATA
//CREATE A STORE LIST AND FORM
//UPDATE LIST IF NEEDED

(function(module){

    let html = module.html;
    let StoreTable = module.StoreTable;
    let storeApi = module.storeApi;
    let StoreForm = module.StoreForm;

    let template = function() {//header + main
        return html `
            <header>
                <h1> Hello World!</h1>
            </header>
            
            <main ></main>
        `;
    };

    class App {
        render() {
            let dom = template();
            
            let main = dom.querySelector('main');
           
            
            let stores = storeApi.get();
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