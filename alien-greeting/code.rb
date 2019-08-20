def greet(name,language = nil)

if language == "spanish"
    random_greeting_spanish = ["hola", "puta", "madre"].sample
    puts "#{random_greeting_spanish +  " " + name + "!"} "
elsif
    language == "italian"
    random_greeting_italian = ["pizza", "pasta", "ciabatta"].sample
    puts "#{random_greeting_italian +  " " + name + "!"} "
else
    random_greeting_english = ["hi", "yo", "hey", "howdy"].sample
    puts "#{random_greeting_english +  " " + name + "!"} "

end
end

greet("john")
