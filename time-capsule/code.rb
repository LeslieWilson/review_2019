names = []

puts "hey whats your name"
name = gets.chomp

puts "do you want to add  your name to the  capsule? type FINISHED when finished"

response = gets.chomp
puts "how many of  that thing?  greater than 0 please"
count = gets.chomp

while response != "FINISHED"
    names << "* #{response} (#{count})"

    puts "add more to the capsule or say FINISHED"
    response = gets.chomp
    if response == "FINISHED"
        break
    else
    puts "how many?"
    count = gets.chomp


end
end


    puts names
