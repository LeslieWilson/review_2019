# # Your code goes here
#
# require 'pry'
#
#
# score = 0
# puts "what level difficulty do you want to play, easy or hard"
# level = gets.chomp
# if level == 'easy'
#     number = rand(10) +1
#     statement = "between 1 and 10"
# elsif level == 'hard'
#         number = rand(20) +1
#         statement = 'between 1 and 20'
#
# end
# puts "I picked a random number #{statement} "
# puts "please enter the number you think I picked"
#
# guess = gets.chomp.to_i
#
# while guess != number
#     puts "you guessed wrong, enter another number"
#     score +=  1
#     guess = gets.chomp.to_i
#     binding.pry
# end
# puts "awesome you guessed rigt!"
# puts "your score is #{score}"

planets = ["Mars", "Pluto", "Jupiter", "Earth"]

planet_list = planets.each do |planet|
  puts "The planet #{planet}."
end
