# CHALLENGE PART 1


# knife_Juggling= 2.10 + 0.77 + 5.00 + 1.00 + 3.00
#
# torch_Juggling= 6.00 + 3.50 + 7.00
# hand_balancing= 2.00 + 1.00
# human_blockhead= 0.75 + 0.43


#
#
# puts "for knife juggling you got:" + knife_Juggling.to_s+ "for hand balencing you got:" + hand_balancing.to_s + "for human blockhead you got:" + human_blockhead.to_s+ "for torch juggling  you got:" + torch_Juggling.to_s
#
# total  = knife_Juggling +  hand_balancing + human_blockhead + torch_Juggling
#
# average = total/12
#
# puts "your total is " + total.to_s
# puts "your average is " + average.to_s
#
#
# ======================================



# CHALLENGE PART 2

puts "would someone like to volunteer"
input1 = gets.chomp
if input1 = 'me'
puts "whats your name?"
name = gets.chomp
puts "ok  #{name}, whats your favorite number"
favorite_number  = gets.chomp.to_i
puts  "me and my friend will juggle these goddang knives around you for #{favorite_number} seconds then!!! "

end
