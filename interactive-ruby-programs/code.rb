# Your code here!


# list = "supply list\n"
# list += "-----\n"
#
# input = ""
# while input != "done"
#     puts "please enter more or say done"
#     input = gets.chomp
#     list += "*#{input}\n"
#
# end
# puts "\n\n"
# puts list.delete("*done")



total_cost = 0.00
input = nil
while input != "done"
    puts "the total is #{total_cost}"
    puts "whats the cost of item? type done when done"
    input= gets.chomp

    if input!= "done"
    total_cost += input.to_f
end
end
print total_cost
