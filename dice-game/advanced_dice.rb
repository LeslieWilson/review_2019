puts  "say y if you want to roll, s if done"
play_game = gets.chomp
puts "how many sides does your dice have?"
sides = gets.chomp.to_i
puts "how many times do you want to roll?"
rolls = gets.chomp.to_i

dice1 = rand(sides)
dice2 = rand(sides)
sum = dice2 + dice2


while play_game != "s"
    puts "you rolled a #{dice1} and a #{dice2} "
    puts "sum is  #{sum}"
    puts "press enter to roll again, s to stop"

    play_game = gets.chomp
    dice1= rand(sides)
    dice2 = rand(sides)
    sum = dice1 + dice2

end


# ask user how many sides dice has and how many times you want to roll
#
# get user input for that
#
# depending on number of sides, roll a random number between the number of sides they say and 0
#
#
#
# depending on how many times they want to roll, output both die that number of times
