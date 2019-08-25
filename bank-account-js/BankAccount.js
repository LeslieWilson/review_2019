class BankAccount{
    constructor(initialBalance){
        this.initialBalance  = initialBalance
        this.transactionList = []
    }

    addATransaction(array){

        this.transactionList  = this.transactionList.concat(array)

    }

    currentBalance(){

        let balance =  this.initialBalance
        this.transactionList.forEach(function(transaction){
        balance += transaction
    })
        return (balance)
    }
}







let initialBalance = 1000
let bills = [-45, -99.95, -34.43]

newAccount = new BankAccount(initialBalance)
newAccount.addATransaction(bills)
console.log(newAccount.currentBalance())
