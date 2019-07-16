# YOUR CODE GOES HERE


puts "choose r, p, or s to play rock paper scissors fool"
input = gets.chomp
computer = rand(4)
if computer == 1 && input == "r"
    puts "player chose r, computer chose r, ITS A TIE FOOLS"
elsif computer == 2 && input == "s"
    puts " player chooses s, computer chooses s, ITS A TIE FOOLS"
elsif computer  == 3 && input == "p"
    puts "player chooses p, computer chooses p, ITS A TIE FOOLS"

elsif computer == 1 && input == "s"
    puts "computer chose r, player chose s, COMPUTER WINS"
elsif computer == 1 && input == "p"
    puts "computer chose r, player chose p, PLAYER WINS"

elsif computer == 2 && input == "r"
    puts "computer chose s, player chose rock, PLAYER WINS"
elsif computer == 2 && input == "p"
    puts "computer chose s, player chose paper, COMPUTER WINS"


elsif computer == 3 && input == "s"
    puts "computer chooses paper, player chooses s, PLAYER WINS"
elsif computer == 3 && input == "r"
    puts "computer chooses paper, player chooses rock, COMPUTER WIN"
end
