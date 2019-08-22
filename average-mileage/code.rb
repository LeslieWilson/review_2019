def average(tripMileage)
    sum = 0
    number= 0
    tripMileage.each do |mileage|
        sum += mileage
        number += 1
    end
    average = sum/number
    return average

end

    ships = {
    {name:"The Shuvver Ship", milage:[260, 483, 792, 357, 546]},
    {name:"The Zhook Cruiser", milage:[186, 223, 173, 297, 303]},
    {name:"The Nanoship",milage:[646, 883, 761, 932, 778]},
}

shipmilageList = [260, 483, 792, 357, 546]

puts " #{average(shipmilageList)}  is your  average mileage"

shipAverage = average(shipmilageList)
puts shipAverage



def milage_rating(average)
    if average >= 1000
        puts "A rating"
    elsif average >=750 && average <1000
        puts  "B rating"
    elsif average >=500 && average  <750
        puts "C rating"
    elsif average  >= 250 && average <500
        puts "D rating"
    else
        puts "you get an F"
    end
end


shipMilageaRating  = milage_rating(shipAverage)
puts shipMilageaRating


def rankings(ships)
    ships.each_with_index do |ship, index|
        puts "#{index + 1}.#{ship}"
    end
end

rankings(['Nanoship', 'Shuvver', 'Snacky Cabs', 'Resisty\'s Ship', 'Zhook Cruiser'])
