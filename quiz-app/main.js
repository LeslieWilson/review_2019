// your code, here
let justJavaScriptGrades= [88,92,68,100]

let weAreRubyGrades = [82,98,94,92]

// TRY 1- WRONG
// justJavaScriptGrades.forEach((grade) => {
//
//     let average += grade/justJavaScriptGrades.length
//     console.log(`the average of jj is ${average}`)
// })

// OUTPUT FOR TRY 1(wrong)
// the average of jj is 176
// main.js:9 the average of jj is 184
// main.js:9 the average of jj is 136


let sum = 0

for(let i = 0; i < justJavaScriptGrades.length; i++){
    sum +=justJavaScriptGrades[i]/justJavaScriptGrades.length
}

console.log(`your justJavaScriptGrades average grade is ${sum}`)



let total = 0

for(let i = 0; i < weAreRubyGrades.length; i++){
    total +=weAreRubyGrades[i]/ weAreRubyGrades.length

    }
        console.log(`your weareruby average grade is ${total}`)


        console.log(`your total average grade is ${sum + total}`)

        console.log(`all the numbers rounded are ${Math.round(sum)} and ${Math.round(total)} and ${Math.round(sum + total)} `)



        let passing = 0
        for(let i = 0; i < justJavaScriptGrades.length; i++){
if (justJavaScriptGrades[i] >= 70)
passing ++

        }

        let passing2 = 0
        for(let i = 0; i < weAreRubyGrades.length; i++){
            if(weAreRubyGrades[i]>=70)
            passing2++
        }

        console.log(`the number of grades above 70 is ${passing} in justjavascript grades group and ${passing2} is the number of people who got above 70 in the weAreRuby group. Total is ${passing + passing2} number of people who got equal or above 70`)
