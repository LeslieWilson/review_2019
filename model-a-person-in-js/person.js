let person = {
    firstname:"Leslie",
    lastname:"Wilson",
    hometown:"New York",
    occupation:"Student",
    catchPhrase:"tap that a$$",
    name() {
        return`${person.firstname} ann ${person.lastname}`
    },
}
console.log(person)
console.log(person.name())
