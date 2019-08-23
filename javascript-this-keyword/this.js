let maxima = {
    make:'Nissan',
    model: 'Maxima',
    year: 2012,
    price: 4999,
    saleSummary(){
        debugger
        return`\$${this.price} - ${this.year} ${this.make} ${this.model}`
    }
}

let jetta = {
    make:'Volkswagen',
    model:'Jetta',
    year: 2014,
    price: 6450,
    saleSummary(){
        debugger
        return`\$${this.price} - ${this.year} ${this.make} ${this.model}`

    }
}


maxima.saleSummary()
jetta.saleSummary()
