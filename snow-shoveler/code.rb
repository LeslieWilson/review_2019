# YOUR CODE GOES HERE



puts "how many inches of snow high dropped?"
cubicFt = gets.chomp.to_i * 8 * 20/1728


if cubicFt > 0 && cubicFt < 49
    pricing = 20
elsif  cubicFt >49 && cubicFt <149
    pricing = 50
elsif cubicFt > 50 && cubicFt < 299
    pricing = 100
else
    pricing =  150
end
puts "your pricing is $ #{pricing}"
