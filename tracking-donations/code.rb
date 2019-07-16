# Your code, here.

puts "enter value here"
total = 0
while total < 100
    input = gets.chomp.to_i
    total = total + input

end

puts "you reached 100"

if total >=125
    twenty_five_mores = ((total - 100)/25).to_i
    twenty_five_mores.times do

        puts  "you've earned another 25"
    end
end
