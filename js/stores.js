(function(module) {
    class Store {

        constructor(props){
            this.name = props.name;
            this.minCust = parseInt(props.minCust);
            this.maxCust = parseInt(props.maxCust);
            this.avgCookies = parseInt(props.avgCookies);
            this.cookiesPerHour = [];
            this.totalSales = 0;
            
            this.generateSales();
            console.log(this);
        }
        generateSales(){
            for(let i = 0; i < 14; i++) {
                let custPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
                let cookieSales = custPerHour * this.avgCookies;
                this.cookiesPerHour.push(cookieSales);
                this.totalSales += cookieSales;
                console.log(custPerHour, cookieSales);
            }
        }
    }
    
    module.Store = Store;
})(window.module = window.module || {});