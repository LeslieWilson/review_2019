class BankAccount{
    constructor(initialBalance){
        this.initialBalance  = initialBalance
        this.transactionList = []
    }

    addATransaction(number){
        this.transactionList.push(number)
    }

    currentBalance(){
        this.transactionList.forEach(function(transaction){
        this.initialBalance += transaction
    })
        return (this.initialBalance)
    }
}







let initialBalance = 1000
let bills = [-45, -99.95, -34.43]

newAccount = new BankAccount(initialBalance)
console.log(newAccount.currentBalance())
