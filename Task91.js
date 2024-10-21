let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}],
        
        amountAllSalaries: function () {
            let salesSalaries = company.sales.reduce((sum, employee) => sum + employee.salary, 0);
            let webSalaries = this.web.reduce((sum, employee) => sum + employee.salary, 0);
            let internalsSalaries = this.internals.reduce((sum, employee) => sum + employee.salary, 0);
            return salesSalaries + webSalaries + internalsSalaries;
        }
    }, 
        amount: function() {
            console.log("Сума всіх зарплат користувачів: " + this.development.amountAllSalaries());
    },
};

company.amount();