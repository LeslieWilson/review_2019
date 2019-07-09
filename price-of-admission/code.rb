#Your code goes here!
adults = 120.80
children = 40.00

puts "how many adults?"

total_adults = adults * gets.chomp.to_f

puts "how many children?"

children= children * gets.chomp.to_f

total = total_adults + children

puts "you owe #{total.round}"
