(function(module) {
    class Store {

        constructor(props){
            this.name = props.name;
            this.min = parseInt(props.min);
            this.max = parseInt(props.max);
            this.avgCookies = parseInt(props.avgCookies);
            this.cookiesPerHour = [];
            this.totalSales = 0;
            
            this.generateSales();
        }
        generateSales(){
            for(let i = 0; i < 14; i++) {
                let customers = Math.floor(Math.random() * (this.max - this.min)) + this.min;
                let cookieSales = customers * this.avgCookies;
                this.cookiesPerHour.push(cookieSales);
                this.totalSales += cookieSales;
            }
        }
    }
    
    module.Store = Store;
})(window.module = window.module || {});