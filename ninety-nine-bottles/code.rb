# YOUR CODE HERE

beer_total = 99

while beer_total > 1
    puts "#{beer_total} bottles of beer on the wall,  #{beer_total} bottles of beer,\ntake one down and pass it around,"
    beer_total -= 1
    puts "#{beer_total} bottles of beer on the wall \n \n"
end

while beer_total == 1
    puts "#{beer_total} bottle of beer on the wall, #{beer_total} bottle of beer,\ntake one down and pass it around,"
    beer_total -= 1
    puts "no more bottles of beer on the wall, no more bottles of beer. go to the store, buy some more, \nyou're a loser who drank 99 beers\n \n"
end
