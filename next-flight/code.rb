# YOUR CODE HERE
flightTimes = [2, 5, 7.5, 8.5, 9, 10, 11.5, 13.5, 14.5, 17, 18, 19, 24]


puts "what time are you leaving?"
leaving = gets.chomp.to_f





flightTimes.each_with_index do |flightTime, index|
    if leaving < flightTime
    puts "you should catch plane number #{index+1} leaving at #{flightTime}"
    break


end

end
