(function(module) {
    let html = module.html;

    let template = function() {
        return html`
        <section>
            <h2>Locations</h2>
            <table></table>
        </section>
        `;
    };

    class StoreList {
        constructor(props) {

        }
        render() {
            let dom = template();
            
            return dom;
        }
    }

    module.StoreList = StoreList;

})(window.module = window.module || {});