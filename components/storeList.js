// 'use strict';

// (function(module) {
    
//     let html = module.html;
//     let StoreEntry = module.StoreEntry;

//     let template = function() {

//         return html`
//             <section>
//             <table>${store.name} </table>
//             <ul> </ul>
//             </section>
//         `;
//     };

//     class StoreList {
//         constructor(props) {
//             this.name = props.name;   
//         }     

//         let storelist = new StoreList ;

//         // update(props) {
//         //     let stores = props.stores;
//         // }


//         // renderStores(store) {
//         //     let storeEntry = new StoreEntry({
//         //         store: store, 
//         //     });
//         //     this.ul.appendChild(storeEntry.render());
//         // }
        
//         render() {

//             let dom = template();
//             let stores = this.stores;

//             for(let i = 0; i < stores.length; i++) {
//                 this.renderStore(stores[i]);
//             }
           
//             return dom;
//         }
    
//     }

//     module.StoreList = StoreList;

// })(window.module = window.module || {});