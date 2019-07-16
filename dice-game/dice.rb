
puts  "say y if you want to roll, s if done"
play_game = gets.chomp

dice1= rand(7)
dice2 = rand(7)
sum = dice1 + dice2

while play_game != "s"
    puts "you rolled a #{dice1} and a #{dice2} "
    puts "sum is  #{sum}"
    puts "press enter to roll again, s to stop"

    play_game = gets.chomp
    dice1= rand(7)
    dice2 = rand(7)
    sum = dice1 + dice2

end
