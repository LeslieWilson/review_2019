# YOUR CODE HERE
require 'pry'

puts "what do you want"
input = ""
while input != "no"
    puts "what did you say you want?"
    input = gets.chomp
    binding.pry
end
puts "ok, bye"
